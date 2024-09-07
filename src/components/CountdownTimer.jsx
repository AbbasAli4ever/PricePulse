import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 69,
    hours: 12,
    minutes: 2,
    seconds: 52,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      let { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else if (days > 0) {
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
      } else {
        clearInterval(intervalId);
      }

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className='flex w-[300px] lg:w-[400px] font-bold'>
      <div className='border-2 border-black p-4 m-1'>{timeLeft.days} days</div>
      <div className='border-2 border-black p-4 m-1'>{timeLeft.hours} hrs</div>
      <div className='border-2 border-black p-4 m-1'>{timeLeft.minutes} mins</div>
      <div className='border-2 border-black p-4 m-1'>{timeLeft.seconds} secs</div>
    </div>
  );
}

export default CountdownTimer;
