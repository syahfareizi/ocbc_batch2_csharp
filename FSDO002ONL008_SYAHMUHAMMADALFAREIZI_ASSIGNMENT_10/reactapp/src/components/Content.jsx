import React from "react";
import "./styles/Content.css";
import "bootstrap";
import { useState } from "react";
import Card from "./Card";

function Content(props) {
  const [name, setName] = useState("");
  const [visitors, setvisitors] = useState([]);
  // function addVisitor(name) {
  //   if (name) {
  //     const oldList = [...visitors];
  //     setvisitors([...oldList, name]);
  //     console.log(oldList);
  //     console.log(visitors);
  //   }
  // }
  // function romoveVisitor() {
  //   const oldList = [...visitors];
  //   const newlist = [...oldList].shift();
  //   setvisitors(newlist);
  // }

  const addVisitor = () => {
    let list = [...visitors];
    if (name) {
      setvisitors(() => [...list, name]);
    }
  };

  // const removeQueue = () => {
  //     setList(...newList => [...newList].shift());
  // };

  const removeVisitor = () => {
    let newList = [...visitors];
    newList.shift();
    setvisitors(newList);
  };

  return (
    <>
      <div className="Card">
        <h1 style={{ color: "blue", textAlign: "center" }}>Simulasi Antrian</h1>
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="m-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <button className="btn btn-primary m-3" onClick={() => addVisitor()}>
            Antrikan!
          </button>
          <button
            className="btn btn-success m-3"
            onClick={() => removeVisitor()}
          >
            Majukan!
          </button>
        </div>
        <div className="d-flex justify-content-center ">
          <h2>Daftar Antrian : </h2>
        </div>
        <div className="d-flex justify-content-center">
          <Card visitors={visitors} />
        </div>
      </div>
    </>
  );
}

export default Content;
