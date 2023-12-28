const findInBrackets = str => {
  const regExp = /\(([^)]+)\)/gim;
  return str.match(regExp);
};

export default findInBrackets;
