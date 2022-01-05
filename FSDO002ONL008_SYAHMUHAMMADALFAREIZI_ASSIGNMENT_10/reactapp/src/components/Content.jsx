import React from "react";
import "./styles/Content.css";
import "bootstrap";
import { useState } from "react";

function Content(props) {
  const [visitors, setvisitors] = useState(["alex", "roger"]);
  return (
    <>
      <div className="Card">
        <h1 style={{ color: "blue", textAlign: "center" }}>Simulasi Antrian</h1>
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="m-3" action="">
            <input type="text" />
          </form>
          <button className="btn btn-primary m-3">Antrikan!</button>
          <button className="btn btn-success m-3">Majukan!</button>
        </div>
        <div className="container ">
          <h2>Daftar Antrian : </h2>
          {visitors.map((visitor) => (
            <div>{visitor}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
