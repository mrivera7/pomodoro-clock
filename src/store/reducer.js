import { INIT, BRK_INC, BRK_DEC, SES_INC, SES_DEC, TICK, INV_TMR, INV_LAZ, RESET } from '../constants';

export const initialState = {
    brk: new Date().setMinutes(5),
    ses: new Date().setMinutes(25),
    laze: false,
    runTimer: false,
    timeLeft: null,
};

function reducer (state=initialState, action) {
    switch(action.type) {
        case INIT:
            return Object.assign({}, state, { timeLeft: state.ses });
        case BRK_INC:
            return Object.assign({}, state, { brk: new Date(new Date(state.brk).getMinutes() + 1) });
        case BRK_DEC:
            return Object.assign({}, state, { brk: new Date(new Date(state.brk).getMinutes() - 1) });
        case SES_INC:
            return Object.assign({}, state, { ses: new Date(new Date(state.ses).getMinutes() + 1) });
        case SES_DEC:
            return Object.assign({}, state, { ses: new Date(new Date(state.ses).getMinutes() - 1) });
        case TICK:
            return Object.assign({}, state, { timeLeft: new Date((new Date(state.timeLeft).getSeconds() - new Date(new Date().setSeconds(1)))) });
        case INV_TMR:
            return Object.assign({}, state, { runTimer: !state.runTimer }, { timeLeft: (state.timeLeft !== null ? new Date().setTime(new Date(state.timeLeft).getSeconds() - 1) : (!state.laze ? state.ses : state.brk)) });
        case INV_LAZ:
            return Object.assign({}, state, { laze: !state.laze });
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default reducer;