const paragraph = document.createElement('p');
const text = prompt('Введите текст для параграфа');

document.body.append(paragraph);

const textDelay = setTimeout(()=>{
  paragraph.textContent = '';
  paragraph.textContent = text;
}, 300);