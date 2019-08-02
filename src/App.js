import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div id="App">
        <div id="break-control">
            <div id="break-label"></div>
            <div id="break-decrement"></div>
            <div id="break-increment"></div>
            <div id="break-length">
                    {/*
                        default (on load) value of 5
                    */}
            </div>
        </div>
        <div id="sesson-control">
            <div id="session-label"></div>
            <div id="session-decrement"></div>
            <div id="session-increment"></div>
            <div id="session-length">
                    {/*
                        default value of 25
                    */}
            </div>
        </div>
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
