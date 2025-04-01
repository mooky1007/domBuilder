# 📖 Dom Craft

![npm version](https://img.shields.io/npm/v/dom_craft.svg)
![license](https://img.shields.io/npm/l/dom_craft.svg)
![size](https://img.shields.io/bundlephobia/minzip/dom_craft)

> ✨ A lightweight, declarative UI builder for Vanilla JavaScript.
> 
> Build DOM elements, attach styles, add animations, and handle transitions.

---

## 🚀 Features
- Ultra-lightweight (less than 2KB gzipped)
- Fully declarative DOM creation
- Supports ESM, UMD
- No Dependencies

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

Dom.div.set({
  class: 'wrapper',
  children: [
    Dom.h1.set({
      text: 'Hello Dom Craft!',
      on: {
        click: function({
          window.alert('hello!');
        })
      }
    })
  ]
})
```
same this

```html
<div class="wrapper">
  <h1>Hello Dom Craft!</h1>
</div>

<script>
  const h1 = document.querySelector('h1')
  h1.addEventListener('click', function{
    window.alert('hello!');
  })
</script>
```


---

## 🔗 Documentation & Demo
- [Live Demo](https://mooky1007.github.io/domBuilder/)
<!-- 
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

---  -->

## 📜 License
MIT License © 2025 [mooky1007]

---