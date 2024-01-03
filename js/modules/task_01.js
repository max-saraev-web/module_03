const onlyJs = arr => {
  const sortedArr = arr.filter(elem => {
    const regE = /(\.ts|\.js|\.jsx)/;
    if (regE.test(elem)) return elem;
  });
  return sortedArr;
};

export default onlyJs;
