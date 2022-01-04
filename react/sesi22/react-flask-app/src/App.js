import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [placeholder, setPlaceholder] = useState("Hi");

  useEffect(() => {
    fetch("/hello")
      .then((result) => result.json())
      .then((data) => {
        setPlaceholder(data.result);
      });
  });
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
      </header>
    </div>
  );
}

export default App;
