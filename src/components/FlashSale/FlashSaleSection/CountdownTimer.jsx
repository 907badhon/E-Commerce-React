import { useEffect, useState } from "react";


function CountdownTimer({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetTime));

  function getTimeRemaining(targetTime) {
    const total = Date.parse(targetTime) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updateTimer = getTimeRemaining(targetTime);
      setTimeLeft(updateTimer);
      if (updateTimer.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex space-x-4 text-center">
      <div>
        <p>Days</p>
        <strong className="text-[32px]">0{days}</strong>
      </div>
      <span className="text-4xl font-bold mt-6 text-gray-600">:</span>
      <div>
        <p>Hours</p>
        <strong className="text-[32px]">{hours}</strong>
      </div>
      <span className="text-4xl font-bold mt-6 text-gray-600">:</span>
      <div>
        <p>Minutes</p>
        <strong className="text-[32px]">{minutes}</strong>
      </div>
      <span className="text-4xl font-bold mt-6 text-gray-600">:</span>
      <div>
        <p>Seconds</p>
        <strong className="text-[32px]">{seconds}</strong>
      </div>
    </div>
  );
}

export default CountdownTimer;
