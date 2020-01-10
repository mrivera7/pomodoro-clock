import {
  BRK_INC, BRK_DEC, SES_INC, SES_DEC, TICK, INV_TMR, INV_LAZ, RESET,
} from '../constants';
import { IncDec } from '../utils';

export const initialState = {
  brk: '5',
  ses: '25',
  laze: false,
  pause: true,
  timeLeft: 25,
  seconds: 0,
};

function reducer(state = initialState, action) {
  const brk = IncDec(state.brk);
  const ses = IncDec(state.ses);
  // eslint-disable-next-line no-console
  console.log(typeof brk.inc, typeof ses.dec);
  switch (action.type) {
    case 'PLAY_PAUSE':
      return { ...state, pause: action.payload };
    case BRK_INC:
      return { ...state, brk: brk.inc };
    case BRK_DEC:
      return { ...state, brk: brk.dec };
    case SES_INC:
      return { ...state, ses: ses.inc };
    case SES_DEC:
      return { ...state, ses: ses.dec };
    case TICK:
      return {
        ...state,
        timeLeft: new Date(
          new Date(state.timeLeft).getSeconds() - new Date(new Date().setSeconds(1)),
        ),
      };
    case INV_TMR:
      return {
        ...state,
        runTimer: !state.runTimer,
        timeLeft: state.timeLeft
          ? new Date().setTime(new Date(state.timeLeft).getSeconds() - 1)
          : (() => (!state.laze ? state.ses : state.brk))(),
      };
    case INV_LAZ:
      return { ...state, laze: !state.laze };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
