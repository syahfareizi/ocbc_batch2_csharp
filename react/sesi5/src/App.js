import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState } from "react";

function App() {

  const [Name, setName] = useState("Budi")

  function changeName () {
    return (
      setName("Faris")
    )
  }
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Content/>
      <hr></hr>
      <Footer/>
      <hr></hr>
      <p>
        Hallo {Name}
      </p>
      <button onClick={changeName}> Change my Name! </button>
    </div>
  );
}

export default App;
