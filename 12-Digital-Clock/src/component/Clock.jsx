import { useEffect, useState } from "react";
import "../styles/Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) => number.toString().padStart(2, "0");

  return (
    <div className="clock-container">
      <h1 className="app-title">Digital Clock</h1>
      <div className="timing-details">
        <div className="info-span">
          <span>{formatNumber(time.getHours())}</span>:
          <span>{formatNumber(time.getMinutes())}</span>:
          <span>{formatNumber(time.getSeconds())} </span>
          <span>{time > 12 ? "PM" : "AM"}</span>
        </div>

        <div className=" date-details">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock;
