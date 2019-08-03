import React, { Component } from 'react';
import { connect } from 'react-redux';
import Break from "./components/break";
import Session from "./components/session";

function App() {
  return (
    <div id="App" className="row">
        <Break />
        <Session />
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
    </div>
  );
}

export default App;
