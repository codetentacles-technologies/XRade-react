import React, { useState, useEffect } from "react";

const CountdownTimer = ({ endDate,onlyDays }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate remaining time
  function calculateTimeRemaining() {
    const end = endDate;
    const now = new Date().getTime();
    const difference = end - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
    {onlyDays ? 
      <span>
      {timeRemaining.days}d {timeRemaining.hours}h left
    </span> :
      <span>
        {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </span>
}
      </>
  );
};

export default CountdownTimer;