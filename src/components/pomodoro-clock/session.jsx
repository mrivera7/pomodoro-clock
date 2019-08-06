import React, { Component } from 'react';
import moment from 'moment';

class Session extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { store } = this.props;
        return (
            <div id="sesson" className="col-sm-6">
                <h3 id="session-label">Session Length</h3>
                <button id="session-decrement" onClick={() => store.sesDec()}>-</button>
                <div id="session-length" style={{display: "inline"}}>
                    { store.ses.seconds() }
                        {/*
                            default value of 25
                        */}
                </div>
                <button id="session-increment" onClick={() => store.sesInc()}>+</button>
            </div>
        );
    }
}

export default Session;