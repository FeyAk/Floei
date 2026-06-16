// Floei — Electron Hauptprozess (Backend)
// Aufgaben: Fenster, sichere API-Schlüssel-Ablage, native Datei-Dialoge.
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

const configPath = () => path.join(app.getPath('userData'), 'floei-config.json');

function readConfig(){
  try { return JSON.parse(fs.readFileSync(configPath(), 'utf8')); }
  catch (e) { return {}; }
}
function writeConfig(cfg){
  try { fs.writeFileSync(configPath(), JSON.stringify(cfg)); } catch (e) {}
}

let win = null;

function createWindow(){
  win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0b0e14',
    autoHideMenuBar: true,
    icon: path.join(__dirname, '..', 'build', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
}

// ---- IPC: API-Schlüssel (verschlüsselt im Benutzerprofil, nicht im Seitenspeicher) ----
ipcMain.on('floei:get-key', (event) => {
  event.returnValue = readConfig().apiKey || '';
});
ipcMain.handle('floei:set-key', (_e, key) => {
  const cfg = readConfig();
  cfg.apiKey = String(key || '');
  writeConfig(cfg);
  return true;
});

// ---- IPC: native Datei-Dialoge ----
ipcMain.handle('floei:save-text', async (_e, suggestedName, content) => {
  const res = await dialog.showSaveDialog(win, {
    defaultPath: suggestedName,
    filters: suggestedName.endsWith('.drawio')
      ? [{ name: 'draw.io Diagramm', extensions: ['drawio'] }]
      : [{ name: 'Floei JSON', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePath) return { ok: false };
  fs.writeFileSync(res.filePath, content, 'utf8');
  return { ok: true, path: res.filePath };
});

ipcMain.handle('floei:open-text', async () => {
  const res = await dialog.showOpenDialog(win, {
    properties: ['openFile'],
    filters: [{ name: 'Floei JSON', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePaths.length) return { ok: false };
  const content = fs.readFileSync(res.filePaths[0], 'utf8');
  return { ok: true, content };
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
