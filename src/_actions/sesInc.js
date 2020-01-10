import { SES_INC } from '../constants';

const sesInc = (ownProps) => {
  const ses = `${Number(ownProps.ses) + 1}`;
  return {
    type: SES_INC,
    payload: ses,
  };
};

export default sesInc;
