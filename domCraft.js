export class Dom {
    constructor() {}
    static qs(selector) {
        return new Element(document.querySelector(selector));
    }
    static qsa(selector) {
        return document.querySelectorAll(selector);
    }
    static el(tagName) {
        return new Element(document.createElement(tagName));
    }
    static get body() {
        return new Element(document.querySelector('body'));
    }

    static delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), ms);
        });
    }

    static injectCss(cssText) {
        const styleTag = document.createElement('style');
        styleTag.textContent = cssText;

        document.head.append(styleTag);
    }
    static get span() {
        return new Element('span');
    }
    static get p() {
        return new Element('p');
    }
    static get h1() {
        return new Element('h1');
    }
    static get h2() {
        return new Element('h2');
    }
    static get h3() {
        return new Element('h3');
    }
    static get h4() {
        return new Element('h4');
    }
    static get h5() {
        return new Element('h5');
    }
    static get h6() {
        return new Element('h6');
    }
    static get div() {
        return new Element('div');
    }

    static get img() {
        return new Element('img');
    }

    static get section() {
        return new Element('section');
    }
    static get article() {
        return new Element('article');
    }
    static get header() {
        return new Element('header');
    }
    static get footer() {
        return new Element('footer');
    }
    static get main() {
        return new Element('main');
    }
    static get ul() {
        return new Element('ul');
    }
    static get button() {
        return new Element('button');
    }
    static get input() {
        return new Element('input');
    }
    static get form() {
        return new Element('form');
    }
    static get li() {
        return new Element('li');
    }
    static get a() {
        return new Element('a');
    }
}

export class Element {
    constructor(el) {
        if (typeof el === 'string') {
            this.el = document.createElement(el);
        } else {
            this.el = el;
        }
        this.init();
    }
    init() {
        this.el.newEl = this;
        this.el.set = this.set.bind(this);
        this.el.attr = this.attr.bind(this);
        this.el.animations = this.animations.bind(this);
        this.el.destroy = this.destroy.bind(this);
        this.el.addChildren = this.addChildren.bind(this);
        this.el.replaceChildren = this.replaceChildren.bind(this);
    }
    set(config = {}) {
        this.config = config;
        if (typeof config === 'string') {
            this.text(config);
        } else {
            Object.entries(config).forEach(([key, value]) => {
                switch (key) {
                    case 'text':
                        this.text(value);
                        break;
                    case 'html':
                        this.html(value);
                        break;
                    case 'style':
                        this.style(value);
                        break;
                    case 'attr':
                        this.attr(value);
                        break;
                    case 'dataset':
                        this.dataset(value);
                        break;
                    case 'href':
                        this.href(value);
                        break;
                    case 'src':
                        this.src(value);
                        break;
                    case 'type':
                        this.type(value);
                        break;
                    case 'placeholder':
                        this.placeholder(value);
                        break;
                    case 'id':
                        this.id(value);
                        break;
                    case 'class':
                        this.class(value);
                        break;
                    case 'ref':
                        value(this);
                        break;
                    case 'children':
                        this.children(value);
                        break;
                    case 'on':
                        this.on(value);
                        break;
                    case 'introAnimation':
                        this.introAnimation = value;
                        break;
                    case 'outroAnimation':
                        this.outroAnimation = value;
                        break;
                    default:
                        this[key] = value;
                        break;
                }
            });
        }

        return this.el;
    }

    id(id) {
        this.el.id = id;
        return this.el;
    }
    text(value) {
        this.el.textContent = value;
        return this.el;
    }

    html(value) {
        this.el.innerHTML = value;
        return this.el;
    }

    placeholder(placeholder) {
        this.el.placeholder = placeholder;
        return this.el;
    }

    type(type) {
        this.el.type = type;
        return this.el;
    }

    src(value) {
        this.el.src = value;
        return this.el;
    }

    href(value) {
        this.el.href = value;
        return this.el;
    }

    class(value) {
        if (value.split(',').length === 1) {
            this.el.classList.add(value);
        } else {
            value.split(',').forEach((className) => {
                this.el.classList.add(className.trim());
            });
        }
        return this.el;
    }

    attr(attr) {
        Object.entries(attr).forEach(([key, value]) => {
            this.el.setAttribute(key, value);
        });
        return this.el;
    }

    style(style) {
        Object.entries(style).forEach(([key, value]) => (this.el.style[key] = value));
        return this.el;
    }

    dataset(dataset) {
        Object.entries(dataset).forEach(([key, value]) => {
            this.el.dataset[key] = value;
        });
        return this.el;
    }

    animations(animations) {
        if (Array.isArray(animations)) {
            animations.forEach((ani) => {
                const { keyframe, options } = ani;
                this.animate(keyframe, options);
            });
        } else {
            const { keyframe, options } = animations;
            this.animate(keyframe, options);
        }
        return this.el;
    }
    async animate(keyframe, options) {
        this.ani = this.el.animate(keyframe, options);
        await this.ani.finished;
        this.onAnimationEnd && this.onAnimationEnd.call(this);
    }

    children(children) {
        children.forEach(async (el) => {
            if (el instanceof Element) {
                if (el.introAnimation) {
                    const { keyframe, options } = el.introAnimation;
                    this.el.append(el.el);
                    await el.el.animate(keyframe, options).finished;
                } else {
                    this.el.append(el.el);
                }
            } else {
                if (el.newEl.introAnimation) {
                    const { keyframe, options } = el.newEl.introAnimation;
                    this.el.append(el);
                    await el.animate(keyframe, options).finished;
                } else {
                    this.el.append(el);
                }
            }
        });
        return this.el;
    }

    on(events) {
        Object.entries(events).forEach(([key, value]) => {
            if (key === 'animationEnd') {
                this.onAnimationEnd = value;
                return;
            }
            this.el.addEventListener(key, value.bind(this));
        });
        return this.el;
    }

    async destroy() {
        if (this.outroAnimation) {
            const { keyframe, options } = this.outroAnimation;
            await this.el.animate(keyframe, options).finished;
            return this.el.remove();
        } else {
            return this.el.remove();
        }
    }
    replaceChildren(...children) {
        this.el.innerHTML = '';
        this.children(children);
    }

    addChildren(...children) {
        this.children(children);
    }
}
