/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import Button from '../Button';

import SetTime from '../SetTime';

// Learn to use useCallback hook effectively

const CountdownTimer = () => {
  const [breakOrSession, setBreakOrSession] = useState(0);

  const [breakTime, setBreakTime] = useState(2);

  const [sessionTime, setSessionTime] = useState(4);

  const countdownCondition = () => (breakOrSession % 2 === 0 ? sessionTime : breakTime);
  const [countdown, setCountdown] = useState(countdownCondition());
  useEffect(() => {
    setCountdown(countdownCondition());
  }, [breakOrSession, breakTime, sessionTime]);

  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (play === true) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      if (countdown === 0) {
        setBreakOrSession(breakOrSession + 1);
        clearTimeout(timer);
      }
    }
  }, [play, countdown]);

  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <>
      <SetTime id="break" title="Break Length" set={setBreakTime} time={breakTime} />
      <div id="timer">
        <div id="timer-label" />
        <div id="time-left">{countdown}</div>
        <Button id="timer-button" onClick={handlePlay}>
          Play/Pause
        </Button>
      </div>
      <SetTime id="session" title="Session Length" set={setSessionTime} time={sessionTime} />
    </>
  );
};

export default CountdownTimer;

/*
class Timer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 20,
    };
    this.pressPause = this.pressPause.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer() {
    // eslint-disable-next-line no-console
    console.log('Timer.timer method used');
    /*
    const { timeLeft, runTimer, tick } = this.props;
    if (!runTimer) {
      if (timeLeft === 59) {

      } else {
        setInterval(tick(), 1000);
      }
    }
    */ /*
}

pressPause() {
// eslint-disable-next-line no-unused-vars
const { runTimer } = this.props;
}

render() {
console.log(this.props);
const { time } = this.state;
return (
  <>
    <div id="timer">
      <div id="timer-label" />
      <div id="time-left">{time}</div>
      <Button id="timer-button" onClick={this.pressPause}>
        Play/Pause
      </Button>
    </div>
  </>
);
}
}
*/
