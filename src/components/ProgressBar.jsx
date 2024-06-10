import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running Interval");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress value={remainingTime} max={timer} />
    </>
  );
}
