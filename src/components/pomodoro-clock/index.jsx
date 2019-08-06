import React, { Component } from 'react';
import Break from "./break";
import Session from "./session";
import Timer from "./timer";

import { connect, Provider } from 'react-redux';

import store from '../../store';
import act from '../../actions';


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this;
        return (
            <div id="pomodoroClock" className="row">
                <Break store={props} />
                <Session store={props} />
                <Timer store={props} />
            </div>
        );
    }
}

const PomodoroClock = () => (
    <Provider store={store}>
        <ConnectApp />
    </Provider>
);

const mapStateToProps = (state) => ({
    brk: state.brk,
    ses: state.ses,
    timeLeft: state.timeLeft,
    runTimer: state.runTimer,
});

const mapDispatchToProps = (dispatch) => ({
    brkInc: () => dispatch(act.brkInc()),
    brkDec: () => dispatch(act.brkDec()),
    sesInc: () => dispatch(act.sesInc()),
    sesDec: () => dispatch(act.sesDec()),
    tick: (timeLeft) => dispatch(act.tick(timeLeft)),
    invTmr: () => dispatch(act.invTmr()),
    invLaz: () => dispatch(act.invLaz()),
    reset: () => dispatch(act.reset()),
});

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default PomodoroClock;
