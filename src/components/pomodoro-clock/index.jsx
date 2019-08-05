import React, { Component } from 'react';
import Break from "./break";
import Session from "./session";
import Timer from "./timer";

import { connect, Provider } from 'react-redux';

import store from '../../store/configureStore';


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="pomodoroClock" className="row">
                <Break store={this.props} />
                <Session store={this.props} />
                <Timer />
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
});

const mapDispatchToProps = (dispatch) => ({
    brkInc: () => dispatch({ type: 'BRK_INC' }),
    brkDec: () => dispatch({ type: 'BRK_DEC' }),
    sesInc: () => dispatch({ type: 'SES_INC' }),
    sesDec: () => dispatch({ type: 'SES_DEC' }),
});

const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default PomodoroClock;
