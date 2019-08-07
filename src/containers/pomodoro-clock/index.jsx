import React, { Component } from 'react';
import Timer from '../../components/timer';

import { connect, Provider } from 'react-redux';

import store from '../../store';
import act from '../../actions';

/*
class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { props } = this;
        return (
            <div id="pomodoroClock" className="row">
                <Timer />
            </div>
        );
    }
}
*/

export const PomodoroClock = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const mapStateToProps = (state) => ({
    brk: state.brk,
    ses: state.ses,
    timeLeft: state.timeLeft,
    runTimer: state.runTimer,
    laze: state.laze,
});

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(act.init()),
    brkInc: () => dispatch(act.brkInc()),
    brkDec: () => dispatch(act.brkDec()),
    sesInc: () => dispatch(act.sesInc()),
    sesDec: () => dispatch(act.sesDec()),
    tick: (timeLeft) => dispatch(act.tick(timeLeft)),
    invTmr: () => dispatch(act.invTmr()),
    invLaz: () => dispatch(act.invLaz()),
    reset: () => dispatch(act.reset()),
});

const App = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default PomodoroClock;