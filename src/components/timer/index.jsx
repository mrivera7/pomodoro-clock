import React, { Component } from 'react';

export class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }
    componentDidMount() {
        this.setTimer();
    }
    
    setTimer() {
        // this.timeout = setTimeout(this.updateClock.bind(this), 1000);

        const { timeLeft, laze, init } = this.props;
        if(!laze) {
            if(timeLeft === null) { init() };
            else {  };
        }
    }
    
    updateClock() {
        this.setState(this.getTime, this.setTimer);
    }

    getTime() {
        /*
        const currentTime = new Date();
        return {
            hours: (currentTime.getHours() > 12 ? currentTime.getHours() % 12 : currentTime.getHours()),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? "pm" : "am"
        };
        */
        const { timeLeft, laze, init } = this.props;
        if(!laze) {
            if(timeLeft === null) {
                init();
            }
            else {
                return { timeLeft };
            }
        }
        return {
            timeLeft: new Date(timeLeft).getMinutes(),
        };        
    }
    render() {
        const { hours, minutes, seconds, ampm } = this.state;
        return(
            <>
                {`${hours}:${minutes}:${seconds} ${ampm}`}
            </>
        );
    }
}

export default Timer;