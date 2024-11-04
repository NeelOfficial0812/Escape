import React, { useEffect, useState } from "react";

interface TimeLeft {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
  milliseconds?: number;
}

interface TimeProps {
  targetDate: string;
}

const Timer: React.FC<TimeProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return {}; // Timer expired
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

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <div>
      {timeLeft.year !== undefined && timeLeft.year > 0 && (
        <span>
          {timeLeft.year} Year{timeLeft.year > 1 ? "s" : ""}{" "}
        </span>
      )}
      {timeLeft.month !== undefined && timeLeft.month > 0 && (
        <span>
          {timeLeft.month} Month{timeLeft.month > 1 ? "s" : ""}{" "}
        </span>
      )}
      {timeLeft.day !== undefined && timeLeft.day > 0 && (
        <span>
          {timeLeft.day} Day{timeLeft.day > 1 ? "s" : ""}{" "}
        </span>
      )}
      {timeLeft.hour !== undefined && timeLeft.hour > 0 && (
        <span>
          {timeLeft.hour} Hour{timeLeft.hour > 1 ? "s" : ""}{" "}
        </span>
      )}
      {timeLeft.minute !== undefined && timeLeft.minute > 0 && (
        <span>
          {timeLeft.minute} Minute{timeLeft.minute > 1 ? "s" : ""}{" "}
        </span>
      )}
      {timeLeft.second !== undefined && (
        <span>
          {timeLeft.second} Second{timeLeft.second > 1 ? "s" : ""}{" "}
        </span>
      )}
      {Object.keys(timeLeft).length === 0 && <span>Time's up!</span>}
    </div>
  );
};

export default Timer;
