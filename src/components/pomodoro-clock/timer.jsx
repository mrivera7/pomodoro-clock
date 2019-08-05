import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            break: false,
            time: (!this.state.break ? this.props.store.session : this.props.store.break),
            runTimer: false,
            timeLeft: this.state.time,
        };
    }
    tick(time) {
        this.setState({
            timeLeft: time - 1,
        });
    }
    render() {
        const { store } = this.props;
        const { time, runTimer } = this.state;
        return(
            <>
                <div id="timer">
                        <div id="timer-label"></div>
                        <div id="time-left">
                            {
                                (runTimer ? time : this.tick(time))
                            }
                            {/*
                                mm:ss
                            */}
                        </div>
                    </div>
                    <div id="timer-control">
                        <button id="start_stop" onClick={() => this.setState({runTimer: !runTimer})}>PlayPause</button>
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