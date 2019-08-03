import React, { Component } from 'react';

class Session extends Component {
    render() {
        return (
            <div id="sesson" className="col-sm-6">
                <div id="session-label">Session Length</div>
                <div id="session-decrement">-</div>
                <div id="session-increment">+</div>
                <div id="session-length">
                        {/*
                            default value of 25
                        */}
                </div>
            </div>
        );
    }
}

export default Session;