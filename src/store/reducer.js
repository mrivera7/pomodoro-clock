import { BRK_INC, BRK_DEC, SES_INC, SES_DEC } from './actions';

export const initialState = {
    break: 5,
    session: 25
};

function reducer (state=initialState, action) {
    switch(action.type) {
        case BRK_INC:
            state.break += 1;
            return state;
        case BRK_DEC:
            state.break -= 1;
        case SES_INC:
            state.session += 1;
            return state;
        case SES_DEC:
            state.session -= 1;
            return state;
        default:
            return state;
    }
}

export default reducer;