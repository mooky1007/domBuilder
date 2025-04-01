# 📖 Dom Craft

![npm version](https://img.shields.io/npm/v/dom_craft.svg)
![license](https://img.shields.io/npm/l/dom_craft.svg)
![size](https://img.shields.io/bundlephobia/minzip/dom_craft)

> Lightweight, declarative UI builder for Vanilla JavaScript.  
> Build DOM elements, attach styles, add animations, and handle transitions.

> 🔧 Vanilla JS DOM builder  
> 🧩 Component-based UI  
> 🎬 CSS Animation support  
> ⚡ Lightweight (2KB)  

#### ⭐ Support This Project

If you find DomCraft helpful, please give it a ⭐️  
It helps others discover this project and motivates continued development!


## 🚀 Features
- Ultra-lightweight (less than 2KB gzipped)
- Fully declarative DOM creation
- Supports ESM, UMD
- No Dependencies


## 📦 Installation
```bash
npm install dom_craft
```

Or use via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/dom_craft@latest/dist/dom_craft.umd.min.js"></script>
```


## 🛠 Basic Usage Example
```js
import { Dom } from 'dom_craft';
// Using CDN? Dom is globally available. No import needed.

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

This code will render:

```html
<div class="wrapper">
  <h1>Hello Dom Craft!</h1>
</div>

<script>
  const h1 = document.querySelector('h1')
  h1.addEventListener('click', function(){
    window.alert('hello!');
  })
</script>
```


## 🔗 Documentation & Demo
- <a href="https://mooky1007.github.io/domBuilder/docs" target="_blank" rel="noopener noreferrer">Docs & Demo</a>


## 🛠 Usage Example
### 📦 Counter Component
```js
  const Counter = () => {
    const CounterButton = Dom.button;
    let count = 0;

    CounterButton.set({
      text: `Count: ${count}`,
      on: {
        click : () => {
          count ++;
          CounterButton.text(`Count: ${count}`);
        }
      }
    })
    return CounterButton;
  }
```

Here’s another way you can use it.

```js
  const Counter = () => {
    const [count, setCount] = Dom.state(0);
    const CounterButton = Dom.button;
    Dom.effect(() => {
      CounterButton.text(`Count: ${count()}`);
    }, [count])

    return CounterButton.set({
      on: {
        click: () => setCount(count() + 1)
      }
    })
  }
```

### 📦 Todo Component
```js
  const Todo = () => {
    const TodoContainer = Dom.div,
          ListWrapper = Dom.ul,
          InputWrapper = Dom.form,
          Input = Dom.input,
          SubmitButton = Dom.button;
    
    const ListItme = (text) => {
      return Dom.li.set({ text });
    }

    InputWrapper.set({
      on: {
        submit: (e) => {
          e.preventDefault();
          if(Input.el.value !== ''){
            ListWrapper.append(ListItme(Input.el.value));
            Input.el.value = '';
          }
        }
      },
      children: [
        Input.set({ 
          type: 'text', 
          attr: {placeholder: 'write your todo'} 
        }),
        SubmitButton.set({ 
          type: 'submit', 
          text: 'Submit' 
        })
      ]
    })

    TodoContainer.set({
      children : [
        ListWrapper,
        InputWrapper
      ]
    })

    return TodoContainer;
  }
```

## 📜 License
MIT License © 2025 [mooky1007]

<!--
Keywords: vanilla js dom library, javascript ui builder, declarative dom js, lightweight dom framework, javascript component framework, no-dependency js library
-->