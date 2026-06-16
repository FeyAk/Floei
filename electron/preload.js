// Sichere Brücke zwischen Frontend (Renderer) und Backend (Main)
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('floeiNative', {
  getKeySync: () => ipcRenderer.sendSync('floei:get-key'),
  setKey: (key) => ipcRenderer.invoke('floei:set-key', key),
  saveText: (name, content) => ipcRenderer.invoke('floei:save-text', name, content),
  openText: () => ipcRenderer.invoke('floei:open-text')
});
