import { SES_DEC } from '../constants';

const sesDec = (ownProps) => {
  const ses = `${Number(ownProps.ses) - 1}`;
  return {
    type: SES_DEC,
    payload: ses,
  };
};

export default sesDec;
