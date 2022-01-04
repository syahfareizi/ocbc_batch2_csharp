import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");
  const [time, setTime] = useState(0);
  // const [localtime, setLocaltime] = useState(new Date().toUTCString(time));

  useEffect(() => {
    fetch("/hello")
      .then((result) => result.json())
      .then((data) => {
        setPlaceholder(data.result);
      });
    fetch("/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => setTime(new Date().toUTCString()), 1000);
  //   console.log("baru");
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [time]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Flask says {placeholder}</p>
        <p>Current Time is {new Date(time).toString()}</p>
      </header>
    </div>
  );
}

export default App;
