import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(180);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [time]);

  return (
    <div className="timer-container">
      <h1 className="timer-header">Count Down Timer</h1>
      <h2 className="timer-display">Time left : {time} Sc</h2>
    </div>
  );
};

export default Timer;
