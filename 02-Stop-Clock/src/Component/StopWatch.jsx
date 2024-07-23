import { useEffect } from "react";
import { useState } from "react";
import "../styles/StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  const handleStart = () => {
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
    <div className="clock-container">
      <h1 className="app-heading">Stopwatch</h1>
      <h2 className="display-time">Time: {time} seconds</h2>
      <div className="button-container">
        <button onClick={handleStart} className="start-btn">
          Start
        </button>

        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
        <button onClick={handleStop} className="stop-btn">
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
