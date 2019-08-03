import React, { Component } from 'react';

class Break extends Component{
    render() {
        return (
            <div id="break" className="col-sm-6">
                <div id="break-label">Break Length</div>
                <div id="break-decrement">-</div>
                <div id="break-increment">+</div>
                <div id="break-length">
                        {/*
                            default (on load) value of 5
                        */}
                </div>
            </div>
        );
    }
}

export default Break;