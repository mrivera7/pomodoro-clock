import { BRK_DEC } from '../constants';

const brkDec = (ownProps) => {
  const brk = `${Number(ownProps.brk) - 1}`;
  return {
    type: BRK_DEC,
    payload: brk,
  };
};

export default brkDec;
