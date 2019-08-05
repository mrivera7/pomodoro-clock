import React, { Component } from 'react';

class Break extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="break" className="col-sm-6">
                <h3 id="break-label">Break Length</h3>
                <button id="break-decrement">-</button>
                <div id="break-length" style={{ display: "inline" }}>
                    { this.props.time }
                        {/*
                            default (on load) value of 5
                        */}
                </div>
                <button id="break-increment">+</button>
            </div>
        );
    }
}

export default Break;