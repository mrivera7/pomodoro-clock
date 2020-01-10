import {
  TICK, INV_TMR, INV_LAZ, RESET,
} from '../constants';

export { default as runTimer } from './runTimer';
export { default as brkInc } from './brkInc';
export { default as brkDec } from './brkDec';
export { default as sesInc } from './sesInc';
export { default as sesDec } from './sesDec';
// export { default as tick } from './tick';

export const tick = () => ({
  type: TICK,
  // payload: { timeLeft: new Date().setTime(new Date(timeLeft).getSeconds() - 1) },
});

export const invTmr = () => ({
  type: INV_TMR,
});

export const invLaz = () => ({
  type: INV_LAZ,
});

export const reset = () => ({
  type: RESET,
});
