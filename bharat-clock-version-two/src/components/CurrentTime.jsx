import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead fw-bold">
      This is the current Time : <br></br> {time.toLocaleTimeString()}
      <br></br>This is current Date : <br></br>
      {time.toLocaleDateString()}{" "}
    </p>
  );
};

export default CurrentTime;
