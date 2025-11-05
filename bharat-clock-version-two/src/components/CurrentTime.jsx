import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-card shadow p-4 rounded-4 mt-4">
      <h3 className="mb-3">Current Time</h3>
      <h2 className="fw-bold mb-2">{time.toLocaleTimeString()}</h2>
      <p className="mb-0 text-muted">{time.toLocaleDateString()}</p>
    </div>
  );
};

export default CurrentTime;
