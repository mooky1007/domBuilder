export class Dom {
    constructor() {}
    static qs(selector) {
        return document.querySelector(selector);
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
        return this.el;
    }
    init() {
        this.el.set = this.set.bind(this);
        this.el.attr = this.attr.bind(this);
        this.el.animations = this.animations.bind(this);
    }
    set(config = {}) {
        this.config = config;
        if (typeof config === 'string') {
            this.text(config);
        } else {
            if ('text' in config) this.text(config.text);
            if ('html' in config) this.html(config.html);
            if ('style' in config) this.style(config.style);
            if ('attr' in config) this.attr(config.attr);
            if ('dataset' in config) this.dataset(config.dataset);
            if ('href' in config) this.href(config.href);
            if ('id' in config) this.id(config.id);
            if ('class' in config) this.class(config.class);
            if ('ref' in config && typeof config.ref === 'function') config.ref(this);
            if ('children' in config) this.children(config.children);
            if ('on' in config) this.on(config.on);
            if ('animations' in config) this.animations(config.animations);
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
        children.forEach((el) => {
            this.el.append(el);
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
}
