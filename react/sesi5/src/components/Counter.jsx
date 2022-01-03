import React, { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Selalu berjalan");
  });

  useEffect(() => {
    console.log("hanya ketika Counter berjalan");
  }, [Counter]);

  useEffect(() => {
    console.log("Hanya jalan sekali ");
  }, []);

  return (
    <div>
      <h2>let's count</h2>
      <h3>{Counter}</h3>
      <button onClick={() => setCounter(Counter + 1)}>Click Me ! </button>
    </div>
  );
}

export default Counter;
