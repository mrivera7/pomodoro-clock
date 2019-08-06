import moment from 'moment';
import { BRK_INC, BRK_DEC, SES_INC, SES_DEC, TICK, INV_TMR, INV_LAZ, RESET } from '../constants';

// var moment = require('moment');

export const initialState = {
    brk: moment.duration(5, 'm'),
    ses: moment.duration(25, 'm'),
    laze: false,
    runTimer: false,
    timeLeft: null,
};

function reducer (state=initialState, action) {
    switch(action.type) {
        case BRK_INC:
            return Object.assign({}, state, { brk: moment(state.brk).add(1, 'm') });
        case BRK_DEC:
            return Object.assign({}, state, { brk: moment(state.brk).subtract(1, 'm') });
        case SES_INC:
            return Object.assign({}, state, { ses: moment(state.ses).add(1, 'm') });
        case SES_DEC:
            return Object.assign({}, state, { ses: moment(state.ses).subtract(1, 'm') });
        case TICK:
            return Object.assign({}, state, { timeLeft: moment(state.timeLeft).subtract(1, 's') });
        case INV_TMR:
            return Object.assign({}, state, { runTimer: !state.runTimer }, { timeLeft: (state.timeLeft !== null ? moment(state.timeLeft).subtract(1, 's') : (!state.laze ? state.ses : state.brk)) });
        case INV_LAZ:
            return Object.assign({}, state, { laze: !state.laze });
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default reducer;