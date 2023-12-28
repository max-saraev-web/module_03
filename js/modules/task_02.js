const findEmail = str => {
  const regE =
    /^[A-Za-z0-9][A-Za-z0-9\.-_]*(\w+)@([a-z]{3,})(\.)([a-z]{2,5})\b/gi;
  const mailArr = str.split(' ');

  const isValid = mailArr.filter(elem => {
    regE.lastIndex = 0;
    return regE.test(elem);
  });
  return isValid;
};

export default findEmail;
