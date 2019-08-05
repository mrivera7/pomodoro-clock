import { BRK_INC, BRK_DEC, SES_INC, SES_DEC } from './actions';
import { bindActionCreators } from 'C:/Users/Michael/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';

export const initialState = {
    break: 5,
    session: 25
};

function reducer (state=initialState, action) {
    switch(action.type) {
        case BRK_INC:
            return Object.assign({}, state, { break: state.break + 1 });
        case BRK_DEC:
            return Object.assign({}, state, { break: state.break - 1 });
        case SES_INC:
            return Object.assign({}, state, { session: state.session + 1});
        case SES_DEC:
            return Object.assign({}, state, { session: state.session + 1});
        case "TICK":
            return Object.assign({}, state, { timeLeft: action.payload.timeLeft });
        default:
            return state;
    }
}

export default reducer;