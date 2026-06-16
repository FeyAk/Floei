# ◈ Floei

A lightweight, browser-based **EPK & BPMN 2.0 diagram editor** with AI-powered generation, a built-in rule checker, and a practice mode — built with vanilla JavaScript and the HTML5 Canvas API. No frameworks, no build step, no runtime dependencies. Runs in the browser or as a Windows desktop app.

**[▶ Try it live](https://feyak.github.io/Floei/)**

## Why

EPK and BPMN are core process-modeling notations in German business informatics and a fixed part of the IHK Fachinformatiker exams. Existing online tools are either bloated, paywalled, or awkward to use — so I built my own.

## Features

### Notations
- **EPK** — Ereignis, Funktion, Org.-Einheit, Informationsobjekt, Dokument, Prozesspfad, and AND/OR/XOR connectors
- **BPMN 2.0** — a complete element set:
  - Events (start / intermediate / end) with all event-type markers (message, timer, error, escalation, condition, link, signal, cancel, compensation, terminate), interrupting/non-interrupting and throwing/catching behaviors
  - Tasks & sub-processes with type icons (user, manual, service, script, business-rule, send, receive) and activity markers (loop, parallel/sequential multi-instance, ad-hoc, compensation, collapsed)
  - Gateways: exclusive, parallel, inclusive, event-based (incl. instantiating), complex
  - Data objects with input/output/collection variants, data stores, groups, custom artifacts, text annotations
  - Pools & lanes with swimlane containment
  - Sequence, default, conditional, message, and association flows

### Editing
- **Drag & drop** from a categorized palette onto an infinite canvas
- **Properties panel** — rename, resize, and configure BPMN markers/variants per element
- **Connections** — edge-to-edge arrows with live preview; click an arrow to select, label (e.g. ja/nein), restyle, or delete it
- **Swimlane containment** — elements inside a lane/pool/group move together with the container
- **Pool template** — one-click insertion of a horizontal pool with named lanes
- **Pan & zoom** — scroll to zoom, drag empty canvas or use arrow keys; arrow keys move the selected element when one is selected
- **Undo & redo** (Ctrl+Z / Ctrl+Y), clone (Alt+drag), inline rename (double-click)

### Generation & assistance
- **⚡ Auto-EPK generator** with two modes:
  - *Schnell-Modus* — type process steps line by line (with branching: XOR/AND/OR splits, `--`, `Ende`, `Merge`), fully offline
  - *KI-Modus* — paste a German exam-style process description and Claude (Anthropic API, bring your own key) models the complete diagram including branches and loops, in EPK or BPMN; a layered graph layout engine arranges everything automatically
- **✓ Rule checker (Regelcheck)** — validates EPK rules (event/function alternation, no decisions after events, connector usage) and BPMN basics; click a finding to jump to the element
- **🎓 Practice mode (Übungsmodus)** — built-in exam-style tasks with model solutions and optional AI grading of your own diagram

### Persistence & export
- **Autosave** to localStorage, plus multiple named diagrams managed from the title bar
- **Share via link** — diagram encoded into the URL, no server needed
- **Export** — PNG (2× resolution, auto-cropped), SVG (true vector), draw.io (.drawio), and JSON; JSON import to reload
- **Light & dark theme** with a glowing dark default

## Usage

No installation required for the web version — use the [live version](https://feyak.github.io/Floei/) or download `index.html` and open it in any modern browser.

| Action | How |
|---|---|
| Add element | Drag from the palette (or click, on touch devices) |
| Switch notation | EPK / BPMN tabs at the top of the palette |
| Auto-generate | **⚡ Auto-EPK** → type steps or paste a description → Generieren |
| Insert pool | **⊞ Pool** → name it and list the lanes |
| Connect | **⤳ Verbinden**, then click two elements in sequence |
| Label / restyle a flow | Select an arrow → properties panel |
| Check rules | **✓ Check** |
| Practice | **🎓 Üben** |
| Auto-layout | **▦ Layout** |
| Undo / redo | Ctrl+Z / Ctrl+Y |

## Desktop app (.exe)

Floei also ships as a Windows desktop app built with Electron. The frontend is the same `index.html`; the Electron main process acts as a small backend providing OS-level secure API-key storage and native open/save dialogs.

**Getting the .exe** — built automatically by GitHub Actions (no local toolchain needed):

1. **Actions** tab → **Build Windows EXE** → **Run workflow** (or push a `v*` tag to trigger it)
2. When the run finishes (~2 min), download `Floei-Windows` from the run's **Artifacts** — it contains an installer and a portable EXE
3. Tagged builds are additionally attached to **Releases**

**Local development:**

```bash
npm install
npm start        # run the desktop app
npm run dist     # build the Windows installer (on Windows)
```

## Tech

- Web app: pure HTML / CSS / JavaScript — zero runtime dependencies
- HTML5 Canvas 2D rendering with devicePixelRatio support
- Pointer Events API for unified mouse/touch handling
- Layered graph layout engine (DFS cycle detection, longest-path layering, parent-averaged ordering) for auto-layout and generation
- Desktop app: Electron (frontend unchanged; main process backend for key storage & file dialogs), built via GitHub Actions CI

## License

[MIT](LICENSE) — free to use, modify, and share.

---

*Built by [Fey](https://github.com/FeyAk) during her Fachinformatikerin Daten- und Prozessanalyse training.*
