const createElement =
  (tag, attr, {append, appends, parent, cb} = {}) => {
    const element = document.createElement(tag);

    if (attr) {
      Object.assign(element, attr);
    }

    if (append && append instanceof HTMLElement) {
      element.append(append);
    }

    if (appends && appends.every(elem => elem instanceof HTMLElement)) {
      element.append(...appends);
    }

    if (parent && parent instanceof HTMLElement) {
      parent.append(element);
    }

    if (cb && typeof cb === 'function') {
      cb(element);
    }

    return element;
  };

export const createInput = createElement(
  'input',
  {
    className: 'main__input',
    placeholder: 'Введите текст тут!',
    style: `
      color: red;
      outline: none;
      font-size: 50px;
      border-radius: 8px;
      border-color: crimson;
      padding: 8px;
      margin-bottom: 24px;
    `,
  },
);
export const cssMainInput = createElement(
  'style',
  {
    type: 'text/css',
    textContent: `
      .main__input::placeholder {
        color: crimson;
      }
      body {
        text-align: center;
      }
    `,
  }
);
export const createParagraph = createElement(
  'p',
  {
    className: 'main__paragraph',
    style: `
      text-align: left;
      margin: 0 auto;
      max-width: 75vw;
      font-weight: 600;
      font-family: sans-serif;
      color: darkslateblue;
    `
  },
);