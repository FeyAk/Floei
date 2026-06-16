# ◈ Floei

A lightweight, browser-based **EPK diagram editor** (Ereignisgesteuerte Prozesskette / Event-driven Process Chain) — built with vanilla JavaScript and the HTML5 Canvas API. No frameworks, no build step, no dependencies. One file, works offline.

**[▶ Try it live](https://feyak.github.io/Floei/)**

## Why

EPK is a core process modeling notation in German business informatics (and a fixed part of the IHK Fachinformatiker exams). Existing online tools are either bloated, paywalled, or awkward to use — so I built my own.

## Features

- **⚡ Auto-EPK generator** with two modes:
  - *Schnell-Modus* — type process steps line by line (`E:`/`F:`/`O:`/`D:`/`I:` prefixes or plain lines), get a linear chain instantly, fully offline
  - *KI-Modus* — paste a full German exam-style process description and Claude (Anthropic API, bring your own key) models the complete EPK including **XOR branches and loops**; a built-in layered graph layout engine (cycle detection via DFS, longest-path layering, parent-averaged column ordering) arranges everything automatically
- **Rule checker (Regelcheck)** — one-click validation of EPK rules (event/function alternation, no decisions after events, connector usage) and BPMN basics; click any finding to jump to the element
- **Practice mode (Übungsmodus)** — built-in German exam-style tasks with model solutions and optional AI grading of your diagram
- **Auto-layout** — rearrange any hand-drawn diagram with the built-in layered layout engine
- **Edge labels** — annotate flows (e.g. ja/nein) directly on connections
- **Connection types** — Sequenzfluss, Nachrichtenfluss (dashed), Assoziation
- **Swimlane containment** — elements inside a lane/pool/group move together when you drag the container
- **Pool template** — one-click insertion of a horizontal pool with named lanes (⊞ Pool)
- **Multiple diagrams** — manage, switch, and delete diagrams from the title-bar menu (localStorage)
- **Share via link** — diagram encoded into the URL, no server needed
- **draw.io export** — open and continue editing your diagrams in diagrams.net
- **Undo & redo** — Ctrl+Z / Ctrl+Y
- **Light & dark theme** — toggle in the top bar, preference persists
- **All standard EPK elements** — Ereignis, Funktion, Org.-Einheit, Informationsobjekt, Dokument, Prozesspfad
- **Full BPMN 2.0 element set** — events (start/intermediate/end) with all event-type markers (message, timer, error, escalation, condition, link, signal, compensation, terminate); tasks & sub-processes with type icons (user, manual, service, script, business-rule, send, receive) and activity markers (loop, parallel/sequential multi-instance, ad-hoc, compensation, collapsed); event behaviors (interrupting/non-interrupting, throwing/catching); exclusive/parallel/inclusive/event-based (incl. instantiating)/complex gateways; data objects with input/output/collection variants, data stores, groups, custom artifacts, annotations, pools/lanes; sequence/default/conditional/message/association flows. Element types are chosen in the properties panel; the AI generator models in EPK or BPMN
- **Logical connectors** — AND (∧), OR (∨), XOR
- **Drag & drop** elements from the sidebar onto an infinite canvas
- **Connections with arrows** — edge-to-edge routing, live preview while connecting, click an arrow to select and delete it
- **Inline editing** — double-click any element to rename it
- **Pan & zoom** — scroll to zoom (cursor-anchored), drag empty canvas or use arrow keys to pan; arrow keys move the selected element instead when one is selected
- **Autosave** — diagram persists in localStorage across browser sessions
- **Export** — PNG (2× resolution, auto-cropped to content), SVG (true vector shapes), JSON
- **Import** — reload a saved JSON diagram
- **Undo** (Ctrl+Z), clone elements (Alt+drag), keyboard shortcuts throughout
- **Touch support** — works on tablets

## Usage

No installation. Either use the [live version](https://feyak.github.io/floei/) or download `index.html` and open it in any modern browser.

| Action | How |
|---|---|
| Add element | Drag from sidebar (or click, on touch devices) |
| Auto-generate | **⚡ Auto-EPK** → type steps line by line → Generieren |
| Connect | Click **⤳ Verbinden**, then click two elements in sequence |
| Rename | Double-click element, or use the properties panel |
| Delete | Select element/arrow → `Del` or 🗑 button |
| Clone | `Alt` + drag an element |
| Undo | `Ctrl` + `Z` |
| Zoom | Mouse wheel, or +/− buttons |
| Pan | Drag empty canvas, or arrow keys (`Shift` = faster) |
| Move element | Select it → arrow keys (`Shift` = fine, 1px) |
| Save manually | `Ctrl` + `S` (autosave is always on) |


## Desktop app (.exe)

Floei also ships as a Windows desktop app built with Electron. The frontend is the same `index.html`; the Electron main process acts as a small backend providing OS-level secure API-key storage and native open/save dialogs.

**Getting the .exe** — built automatically by GitHub Actions (no local toolchain needed):

1. Go to the **Actions** tab → workflow **Build Windows EXE** → **Run workflow**, *or* push a version tag (`v2.0.0`) to trigger it automatically
2. When the run finishes (~5 min), download `Floei-Windows` from the run's **Artifacts** — it contains an installer (`Floei Setup x.x.x.exe`) and a portable EXE
3. Tagged builds are additionally attached to **Releases**

**Local development:**

```bash
npm install
npm start        # run the desktop app
npm run dist     # build the Windows installer (on Windows)
```

## Tech

- Web app: pure HTML / CSS / JavaScript — zero runtime dependencies
- Desktop app: Electron (frontend unchanged; main process backend for key storage & file dialogs), built via GitHub Actions CI
- HTML5 Canvas 2D rendering with devicePixelRatio support
- Pointer Events API for unified mouse/touch handling
- SVG export generates real vector shapes (hexagons, ellipses, document curves), not rasterized screenshots

## Roadmap

- [ ] Snap-to-grid and alignment guides
- [ ] BPMN 2.0 XML interchange export

## License

[MIT](LICENSE) — free to use, modify, and share.

---

*Built by [Fey](https://github.com/FeyAk) during her Fachinformatikerin Daten- und Prozessanalyse training.*
