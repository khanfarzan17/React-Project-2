import React, { useEffect, useState } from "react";
import "../Styles/CounterTimer.css";

const CounterTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setRunning(false);
    }
    return () => {
      clearInterval(timer);
    };
  }, [running, time]);

  const handleStart = () => {
    setTime(60);
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div className="Counter-Container">
      <h1 className="Counter-Header">Count Down Timer</h1>
      <h2 className="Counter-display">{time} seconds</h2>

      <div className="button-container">
        <button className="Counter-button" onClick={handleStart}>
          Start
        </button>
        <button className="Counter-button" onClick={handleReset}>
          Reset
        </button>
        <button className="Counter-button" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default CounterTimer;
