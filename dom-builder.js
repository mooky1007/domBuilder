export class Dom {
    qs(selector) {
        return document.querySelector(selector);
    }
    qsa(selector) {
        return document.querySelectorAll(selector);
    }
    ce(tagName) {
        return document.createElement(tagName);
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
    static get div() {
        return new Element('div');
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

        if ('nested' in config) {
            config.nested.forEach((el) => {
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

        return this.el;
    }
}

// const dom = new Dom();

// document.addEventListener('DOMContentLoaded', () => {
//     const createStepBox = (idx, text) => {
//         const div = Dom.div.set({
//             style: {
//                 display: 'inline-flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 border: '1px solid #ddd',
//                 padding: '5px',
//                 gap: '5px',
//                 width: '100%',
//                 maxWidth: '200px',
//             },
//             on: {
//                 click: function () {
//                     alert(`Step0${idx}: ${text}`);
//                 },
//             },
//             nested: [
//                 Dom.span.set({
//                     text: `Step0${idx}`,
//                     style: { color: '#fff', fontSize: '11px' },
//                 }),
//                 Dom.p.set({
//                     text: text,
//                     classes: 'step_text',
//                     style: { color: '#fff', fontSize: '15px', fontWeight: 700 },
//                     nested: [
//                         Dom.div.set({
//                             style: {
//                                 display: 'flex',
//                                 gap: '5px',
//                                 marginTop: '10px',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             },
//                             nested: [
//                                 Dom.span.set({
//                                     text: '🤔',
//                                     classes: 'emoji, step_text_emoji1',
//                                 }),
//                                 Dom.span.set({
//                                     text: '🥺',
//                                     classes: 'emoji, step_text_emoji2',
//                                 }),
//                             ],
//                         }),
//                     ],
//                 }),
//             ],
//         });

//         return div;
//     };

//     Dom.body.set({
//         nested: [createStepBox(1, 'Make Relationship'), createStepBox(2, 'Make Friendship'), createStepBox(3, 'Make Love')],
//         style: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100vh',
//             gap: '10px',
//         },
//     });
// });
