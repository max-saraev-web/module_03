const onlyJs = () => {
  const origin = ['module.jsx',
    'index.html',
    'style.css',
    'index.js', 'file.ts',
    'library.css',
    'my.plugin.js'];

  const sortedArr = origin.filter(elem => {
    const regE = /(\.ts|\.js|\.jsx)/;
    if (regE.test(elem)) return elem;
  });
  return sortedArr;
};

export default onlyJs;
