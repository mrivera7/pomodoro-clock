import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { tock: "tick" };
    }
    componentDidMount() {
        if (this.props.store.runTimer) {
            this.timer = setInterval(() => this.tick(), 1000);
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        const { store } = this.props;
        store.tick();
    }
    playPause() {
        const { store } = this.props;
        store.invTmr();
    }
    render() {
        const { store } = this.props;
        const { brk, ses, timeLeft, runTimer, laze, reset } = store;
        let mm, ss;
        if(!runTimer && timeLeft === null) {
            mm = `${new Date(ses).getMinutes()}`;
            ss = `00`;
        } else {
            mm = `${new Date(timeLeft).getMinutes()}`;
            ss = `${new Date(new Date().setSeconds(new Date(timeLeft).getSeconds() % 60)).getSeconds()}`;
        }
        return(
            <>
                <div id="timer">
                        <div id="timer-label"></div>
                        <div id="time-left">
                            {
                                `${mm}:${ss}`
                            }
                            {/*
                                mm:ss
                            */}
                        </div>
                    </div>
                    <div id="timer-control">
                        <button id="start_stop" onClick={() => this.playPause()}>PlayPause</button>
                        <button id="reset" onClick={() => reset()}>reset
                            {/*
                                break-length = 5; session-length = 25;
                            */}
                        </button>
                    </div>
                    <audio src="" id="beep"></audio>
            </>
        );
    }
}

export default Timer;