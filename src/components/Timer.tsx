import React, { useEffect, useState } from "react";
import "../App.css";

interface TimerLeft {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

interface TimerProps {
  targetDate: string;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimerLeft>({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return {};
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    const days = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      year: years,
      month: months,
      day: days,
      hour: hours,
      minute: minutes,
      second: seconds,
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isTimerExpired = Object.keys(timeLeft).length === 0;

  return (
    <>
      {isTimerExpired ? (
        <div>Time Expired</div>
      ) : (
        <div className="App-Timer-Box">
          <div className="Time-Box">
            <span className="Time-Digit">{timeLeft.month}</span>
            <span className="Time-Label">Months</span>
          </div>
          <span className="Time-Colon">:</span>
          <div className="Time-Box">
            <span className="Time-Digit">{timeLeft.day}</span>
            <span className="Time-Label">Days</span>
          </div>
          <span className="Time-Colon">:</span>
          <div className="Time-Box">
            <span className="Time-Digit">{timeLeft.hour}</span>
            <span className="Time-Label">Hours</span>
          </div>
          <span className="Time-Colon">:</span>
          <div className="Time-Box">
            <span className="Time-Digit">{timeLeft.minute}</span>
            <span className="Time-Label">Minutes</span>
          </div>
          <span className="Time-Colon">:</span>
          <div className="Time-Box">
            <span className="Time-Digit">{timeLeft.second}</span>
            <span className="Time-Label">Seconds</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
