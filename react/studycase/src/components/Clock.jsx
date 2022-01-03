import React, { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  // setInterval(() => tick(), 1000);
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    console.log("baru");
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Realtime Clock using Function Component</h1>
      <hr></hr>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
