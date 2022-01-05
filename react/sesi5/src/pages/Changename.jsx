import { useState } from "react";
import Counter from "./Counter";

function Changename() {
  const [Name, setName] = useState("Budi");
  function changeName() {
    return setName("Faris");
  }
  return (
    <>
      {/* PAGES 2 */}
      <div className="App">Hallo {Name}</div>
      <div className="App">
        <button onClick={changeName}> Change my Name! </button>
      </div>
      <Counter />
    </>
  );
}

export default Changename;
