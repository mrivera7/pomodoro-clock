import React, { Component } from 'react';
import moment from 'moment';

class Break extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { store } = this.props;
        return (
            <div id="break" className="col-sm-6">
                <h3 id="break-label">Break Length</h3>
                <button id="break-decrement" onClick={() => store.brkDec()}>-</button>
                <div id="break-length" style={{ display: "inline" }}>
                    { moment(store.brk).format('mm:ss') }
                        {/*
                            default (on load) value of 5
                        */}
                </div>
                <button id="break-increment" onClick={() => store.brkInc()}>+</button>
            </div>
        );
    }
}

export default Break;