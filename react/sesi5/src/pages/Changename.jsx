import { useState } from "react";
import Counter from "./Counter";
import { Link, Route, matchRoutes, Routes, useParams } from "react-router-dom";

function Changename() {
  // const paramps = { ...useParams() };
  // let { path, url } = matchRoutes();
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
      {/* <Link to={`${url}:fulan`}></Link>
      <Link to={`${url}:fulana`}></Link>
      <Routes>
        <Route path={path}>
          <h3>Please select a name</h3>
        </Route>
        <Route path={`${path}/:name`}></Route>
      </Routes> */}
      <Counter />
    </>
  );
}

export default Changename;
