import React, { Component } from 'react';
import Break from "./break";
import Session from "./session";
import Timer from "./timer";

import { connect, Provider } from 'react-redux';

import store from '../../store/configureStore';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            break: false,
        };
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
    break: state.break,
    session: state.session,
    timeLeft: state.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
    brkInc: () => dispatch({ type: 'BRK_INC' }),
    brkDec: () => dispatch({ type: 'BRK_DEC' }),
    sesInc: () => dispatch({ type: 'SES_INC' }),
    sesDec: () => dispatch({ type: 'SES_DEC' }),
    tick: (timeLeft) => dispatch({ type: 'TICK', payload: timeLeft }),
});

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default PomodoroClock;
