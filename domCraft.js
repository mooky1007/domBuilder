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
    static get presets() {
        return {
            ani: {
                fadeIn: [{ opacity: 0 }, { opacity: 1 }],
                fadeOut: [{ opacity: 1 }, { opacity: 0 }],
                slideUp: [{ transform: 'translateY(10px)' }, { transform: 'translateY(0)' }],
                slideDown: [{ transform: 'translateY(-10px)' }, { transform: 'translateY(0)' }],
            },
        };
    }
    static get body() {
        return new Element(document.querySelector('body'));
    }

    static state(intial) {
        let _value = intial;
        const listeners = new Set();

        const get = () => _value;
        const set = (newValue) => {
            _value = newValue;
            listeners.forEach((fn) => fn());
        };

        get.sub = (fn) => listeners.add(fn);
        get.unsub = (fn) => listeners.delete(fn);

        return [get, set];
    }

    static effect(fn, deps) {
        deps.forEach((deps) => deps.sub(fn));
        fn();
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
    static get i() {
        return new Element('i');
    }
    static get label() {
        return new Element('label');
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
    static get figure() {
        return new Element('figure');
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
    static get ol() {
        return new Element('ol');
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
        if (typeof el === 'string') this.el = document.createElement(el);
        else this.el = el;
    }
    set(config = {}) {
        this.config = config;
        if (typeof config === 'string') {
            this.text(config);
        } else {
            Object.entries(config).forEach(([key, value]) => {
                if (key in this) this[key](value);
                else this[key] = value;
            });
        }

        return this;
    }
    id(id) {
        this.el.id = id;
        return this;
    }
    text(value) {
        this.el.textContent = value;
        return this;
    }

    html(value) {
        this.el.innerHTML = value;
        return this;
    }

    placeholder(placeholder) {
        this.el.placeholder = placeholder;
        return this;
    }
    type(type) {
        this.el.type = type;
        return this;
    }

    src(value) {
        this.el.src = value;
        return this;
    }

    href(value) {
        this.el.href = value;
        return this;
    }

    class(value) {
        if (value.split(' ').length === 1) {
            this.el.classList.add(value);
        } else {
            value.split(' ').forEach((className) => {
                this.el.classList.add(className.trim());
            });
        }
        return this;
    }

    attr(attr) {
        Object.entries(attr).forEach(([key, value]) => {
            this.el.setAttribute(key, value);
        });
        return this;
    }

    style(style) {
        Object.entries(style).forEach(([key, value]) => (this.el.style[key] = value));
        return this;
    }

    dataset(dataset) {
        Object.entries(dataset).forEach(([key, value]) => {
            this.el.dataset[key] = value;
        });
        return this;
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
        return this;
    }
    async animate(keyframe, options) {
        this.ani = this.el.animate(keyframe, options);
        await this.ani.finished;
        this.onAnimationEnd && this.onAnimationEnd.call(this);
    }

    children(children, append = true) {
        if (!Array.isArray(children)) children = [children];

        children.forEach(async (element) => {
            if (element instanceof Element) {
                if (append) this.el.append(element.el);
                else this.el.prepend(element.el);

                if (element.introAnimation) {
                    const { keyframe, options } = element.introAnimation;
                    element.el.animate(keyframe, options);
                }
            }
        });
        return this;
    }

    on(events) {
        Object.entries(events).forEach(([key, value]) => {
            if (key === 'animationEnd') {
                this.onAnimationEnd = value;
                return;
            }

            this.el.addEventListener(key, value.bind(this));
        });
        return this;
    }

    async remove() {
        if (this.outroAnimation) {
            const { keyframe, options } = this.outroAnimation;
            await this.el.animate(keyframe, options).finished;
            return this.el.remove();
        } else {
            return this.el.remove();
        }
    }

    replace(children) {
        this.el.innerHTML = '';
        this.children(children);
    }

    append(children) {
        this.children(children);
    }

    removeClass(className) {
        this.el.classList.remove(className);
    }

    prepend(children) {
        this.children(children, false);
    }
}
