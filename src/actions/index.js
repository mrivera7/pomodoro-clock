import { INIT, BRK_INC, BRK_DEC, SES_INC, SES_DEC, TICK, INV_TMR, INV_LAZ, RESET } from '../constants';

export const init = () => {
    return {
        type: INIT
    };
};

export const brkInc = () => {
    return {
        type: BRK_INC
    };
};

export const brkDec = () => {
    return {
        type: BRK_DEC
    };
};

export const sesInc = () => {
    return {
        type: SES_INC
    };
};

export const sesDec = () => {
    return {
        type: SES_DEC
    };
};

export const tick = () => {
    return {
        type: TICK,
        // payload: { timeLeft: new Date().setTime(new Date(timeLeft).getSeconds() - 1) },
    };
};

export const invTmr = () => {
    return {
        type: INV_TMR
    };
};

export const invLaz = () => {
    return {
        type: INV_LAZ
    };
};

export const reset = () => {
    return {
        type: RESET
    };
};

const act = {
    init: () => {
        return {
            type: INIT
        };
    },
    brkInc: () => {
        return {
            type: BRK_INC
        };
    },
    brkDec: () => {
        return {
            type: BRK_DEC
        };
    },
    sesInc: () => {
        return {
            type: SES_INC
        };
    },
    sesDec: () => {
        return {
            type: SES_DEC
        };
    },
    tick: (time) => {
        return {
            type: TICK,
            payload: { timeLeft: time - 1 },
        }
    },
    invTmr: () => {
        return {
            type: INV_TMR
        };
    },
    invLaz: () => {
        return {
            type: INV_LAZ
        };
    },
    reset: () => {
        return {
            type: RESET
        };
    }
};

export default act;