import { BRK_INC } from '../constants';

const brkInc = (ownProps) => {
  const brk = `${Number(ownProps.brk) - 1}`;
  return {
    type: BRK_INC,
    payload: brk,
  };
};

export default brkInc;
