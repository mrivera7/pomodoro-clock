import React, { Component } from 'react';

class Session extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="sesson" className="col-sm-6">
                <h3 id="session-label">Session Length</h3>
                <button id="session-decrement">-</button>
                <div id="session-length" style={{display: "inline"}}>
                    { this.props.time }
                        {/*
                            default value of 25
                        */}
                </div>
                <button id="session-increment">+</button>
            </div>
        );
    }
}

export default Session;