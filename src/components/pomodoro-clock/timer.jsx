import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div id="timer">
                        <div id="timer-label"></div>
                        <div id="time-left">
                            {/*
                                mm:ss
                            */}
                        </div>
                    </div>
                    <div id="timer-control">
                        <div id="start_stop"></div>
                        <div id="reset">
                            {/*
                                break-length = 5; session-length = 25;
                            */}
                        </div>
                    </div>
                    <audio src="" id="beep"></audio>
            </>
        );
    }
}

export default Timer;