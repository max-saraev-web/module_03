import {textDelay} from './modules/control.js';
import * as createElems from './modules/create.js'
const {
  createInput,
  cssMainInput,
  createParagraph} = createElems;

const input = createInput;
const paragraph = createParagraph;

textDelay(input, paragraph)

document.head.prepend(cssMainInput);
document.body.append(input, paragraph);