const IncDec = (num) => {
  switch (typeof num) {
    case 'string':
      return { inc: `${Number(num) + 1}`, dec: `${Number(num) - 1}` };
    case 'number':
      return { inc: `${num + 1}`, dec: `${num - 1}` };
    default:
      return typeof num;
    // throw new Error('NaN');
  }
};

export default IncDec;
