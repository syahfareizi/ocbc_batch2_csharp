import React, { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("efek berjalan/di trigger");
  });

  return (
    <div>
      <h2>let's count</h2>
      <h3>{Counter}</h3>
      <button onClick={() => setCounter(Counter + 1)}>Click Me ! </button>
    </div>
  );
}

export default Counter;
