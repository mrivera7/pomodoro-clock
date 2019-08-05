import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import store from './store/configureStore';

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

const AppWrapper = () => (
    <Provider store={store}>
        <ConnectApp />
    </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));