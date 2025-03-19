# DomCraft

> A lightweight, fluent, chainable DOM builder for vanilla JavaScript.

## 🚀 Features

-   Easy-to-use, fluent API
-   Supports `Dom.div`, `Dom.body`, `Dom.ce('tag')` and more
-   Declarative setup for styles, classes, events, attributes, and nested elements
-   Available via CDN or npm

---

## 📦 Installation

### ✅ Install via NPM

```bash
npm i dom_craft
```

> For module-based environments (Vite, Webpack, ESModules)

### ✅ Use via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/dom_craft@latest/dist/dom_craft.umd.js"></script>
```

> The `Dom` object will be globally available immediately.

---

## 🛠 Usage Examples

### ✅ Browser (CDN) Example

```html
<script src="https://cdn.jsdelivr.net/npm/dom_craft@latest/dist/dom_craft.umd.js"></script>
<script>
    Dom.body.set({
        children: [
            Dom.div.set({
                text: 'Hello, DomCraft!',
                style: {
                    padding: '20px',
                    backgroundColor: '#333',
                    color: '#fff',
                    borderRadius: '8px',
                    textAlign: 'center',
                },
                on: {
                    click: function () {
                        alert('Box clicked!');
                    },
                },
            }),
        ],
    });
</script>
```

### ✅ Import Example (module-based)

```js
import DomCraft from 'dom_craft';

DomCraft.Dom.body.set({
    children: [
        DomCraft.Dom.div.set({
            text: 'Hello from import!',
            style: { color: 'blue', fontSize: '20px' },
        }),
    ],
});
```

---

## ✏️ Main API

| Method / Property | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `Dom.div`         | Creates a `<div>` element and returns an ElementBuilder |
| `Dom.span`        | Creates a `<span>` element                              |
| `Dom.p`           | Creates a `<p>` element                                 |
| `Dom.body`        | Returns a wrapper for the `<body>` element              |
| `Dom.el('tag')`   | Creates a custom tag element                            |

| ElementBuilder Methods | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `.set({...})`          | Set text, style, classes, attributes, events, children |

---

## 📝 License

MIT
