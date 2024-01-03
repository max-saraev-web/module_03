const strToLink = str => {
  const textElem = document.querySelector('.task-04');
  textElem.style.cssText = `
    max-width: 60%;
    margin: 0 auto;
    border: 10px dashed #ff6550;
    padding: 12px;
  `;

  const regExp = /(https?:\/\/)(\w+)\.(\w{2,5})/gi;

  textElem.innerHTML = str.replace(regExp, match => {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = match;
    link.textContent = match;
    return link.outerHTML;
  });
};

export default strToLink;
