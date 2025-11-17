import React, { useEffect, useState } from 'react';


function CountdownTimer({ targetTime }) {
  
 const [timeLeft, setTimeLeft] = useState(getRemainingTime(targetTime));
  
  function getRemainingTime(targetTime) {
    const total = Date.parse(targetTime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime(targetTime))
    }, 1000);
    return () => clearInterval(timer);
  } ,[targetTime])
  

  return (
    <div className="flex flex-wrap gap-3 mt-8 text-center">
      <div className="bg-white/70 rounded-md px-4 py-3">
        <p className="text-2xl font-semibold text-black">{timeLeft.days}</p>
        <p className="text-xs text-black">Days</p>
      </div>
      <div className="bg-white/70 rounded-md px-4 py-3">
        <p className="text-2xl font-semibold text-black">{timeLeft.hours}</p>
        <p className="text-xs text-black">Hours</p>
      </div>
      <div className="bg-white/70 rounded-md px-4 py-3">
        <p className="text-2xl font-semibold text-black">{timeLeft.minutes}</p>
        <p className="text-xs text-black">Minutes</p>
      </div>
      <div className="bg-white/70 rounded-md px-4 py-3">
        <p className="text-2xl font-semibold text-black">{timeLeft.seconds}</p>
        <p className="text-xs text-black">Seconds</p>
      </div>
    </div>
  );
}

export default CountdownTimer;
