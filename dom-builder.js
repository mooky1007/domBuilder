export class DomBuilder {
    static qs(selector) {
        return document.querySelector(selector);
    }

    static qsa(selector) {
        return document.querySelectorAll(selector);
    }

    static ce(tagName) {
        return new ElementBuilder(tagName);
    }

    static get body() {
        return new ElementBuilder(document.body);
    }
}

export class ElementBuilder {
    constructor(el) {
        if (typeof el === 'string') {
            this.el = document.createElement(el);
        } else {
            this.el = el;
        }
    }

    text(content) {
        this.el.textContent = content;
        return this;
    }

    html(content) {
        this.el.innerHTML = content;
        return this;
    }

    style(styleObj = {}) {
        Object.entries(styleObj).forEach(([key, value]) => {
            this.el.style[key] = value;
        });
        return this;
    }

    attrs(attrObj = {}) {
        Object.entries(attrObj).forEach(([key, value]) => {
            this.el.setAttribute(key, value);
        });
        return this;
    }

    classes(classInput) {
        if (Array.isArray(classInput)) {
            this.el.classList.add(...classInput);
        } else if (typeof classInput === 'string') {
            classInput
                .split(',')
                .map((cls) => cls.trim())
                .forEach((cls) => this.el.classList.add(cls));
        }
        return this;
    }

    on(eventName, handler) {
        this.el.addEventListener(eventName, handler.bind(this));
        return this;
    }

    nested(elements = []) {
        elements.forEach((child) => {
            this.el.append(child.el || child);
        });
        return this;
    }

    ref(callback) {
        if (typeof callback === 'function') {
            callback(this.el);
        }
        return this;
    }

    transition(value) {
        this.el.style.transition = value;
        return this;
    }

    build() {
        return this.el;
    }
}
