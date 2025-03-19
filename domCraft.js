export class Dom {
    constructor() {}
    qs(selector) {
        return document.querySelector(selector);
    }
    qsa(selector) {
        return document.querySelectorAll(selector);
    }
    static el(tagName) {
        return new Element(document.createElement(tagName));
    }
    static get body() {
        return new Element(document.querySelector('body'));
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
    }
    set(config = {}) {
        this.config = config;
        if ('text' in config) {
            this.el.textContent = config.text;
        }

        if ('html' in config) {
            this.el.innerHTML = config.html;
        }

        if ('style' in config) {
            Object.keys(config.style).forEach((styleKey) => {
                this.el.style[styleKey] = config.style[styleKey];
            });
        }

        if ('attributes' in config) {
            Object.keys(config.attributes).forEach((attrKey) => {
                this.el.setAttribute(attrKey, config.attributes[attrKey]);
            });
        }

        if ('children' in config) {
            config.children.forEach((el) => {
                this.el.append(el);
            });
        }

        if ('on' in config) {
            Object.keys(config.on).forEach((eventKey) => {
                this.el.addEventListener(eventKey, config.on[eventKey].bind(this));
            });
        }

        if ('classes' in config) {
            if (config.classes.split(',').length === 1) {
                this.el.classList.add(config.classes);
            } else {
                config.classes.split(',').forEach((className) => {
                    this.el.classList.add(className.trim());
                });
            }
        }

        if ('animations' in config) {
            Object.keys(config.animations).forEach((animationKey) => {
                const [keyframe, options] = config.animations[animationKey];
                this.el.animate(keyframe, options);
            });
        }

        return this.el;
    }
}
