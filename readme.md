# 📖 Dom Craft

![npm version](https://img.shields.io/npm/v/dom_craft.svg)
![license](https://img.shields.io/npm/l/dom_craft.svg)
![size](https://img.shields.io/bundlephobia/minzip/dom_craft)

> Lightweight, declarative UI builder for Vanilla JavaScript.  
> Build DOM elements, attach styles, add animations, and handle transitions.

---

## ⭐ Support This Project

If you find DomCraft helpful, please give it a ⭐️  
It helps others discover this project and motivates continued development!

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
//When using a CDN, 
//the DOM can be accessed directly without additional setup.

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

This renders the following:

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
- <a href="https://mooky1007.github.io/domBuilder/" target="_blank" rel="noopener noreferrer">Demo</a>

---

## 📜 License
MIT License © 2025 [mooky1007]

---