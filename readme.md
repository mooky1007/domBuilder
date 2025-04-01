# 📖 Dom Craft

![npm version](https://img.shields.io/npm/v/dom_craft.svg)
![license](https://img.shields.io/npm/l/dom_craft.svg)
![size](https://img.shields.io/bundlephobia/minzip/dom_craft)

> ✨ A lightweight, declarative UI builder for Vanilla JavaScript.
> 
> Build DOM elements, attach styles, add animations, and handle transitions — all in a clean, chainable API.

---

## 🚀 Features
- Ultra-lightweight (less than 2KB gzipped)
- Fully declarative DOM creation
- Supports ESM, UMD, and automatic CDN usage

---

## 📦 Installation
```bash
npm install dom_craft
```

Or use via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/dom_craft@latest/dist/dom_craft.umd.min.js"></script>
```

---

## 🛠 Basic Usage Example
```js
import { Dom } from 'dom_craft';

Dom.injectCss(`
  body { background: #fafafa; width: 100vw; height: 100vh; position: relative;}
  .card { position:absolute; top:50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; border-radius: 12px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
`);

const fadeIn = {
  keyframe: [
    { opacity: 0, transform: 'translate(-50%, -50%) scale(3)' }, 
    { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
  ],
  options: { duration: 750, fill: 'both' }
};

const card = Dom.div.set({
  class: 'card',
  introAnimation: fadeIn,
  children: [
    Dom.h1.set('Hello, DomCraft!'),
    Dom.p.set('Lightweight, declarative, animated DOM builder.')
  ]
});

Dom.body.set({ children: [card] });
```

---
<!-- 
## 🔗 Documentation & Demo
- [📚 Full Documentation](#) *(작성 후 링크 연결)*
- [🎮 Live Demo](#) *(배포 후 GitHub Pages 링크 추가)*

---

## 🛠 Development / Build
```bash
npm run build
```

### Build outputs:
| Format  | Path                               |
|---------|------------------------------------|
| UMD     | dist/dom_craft.umd.js             |
| ESM     | dist/dom_craft.esm.js             |
| Types   | dist/dom_craft.d.ts               |

--- -->

## 📜 License
MIT License © 2025 [mooky1007]

---