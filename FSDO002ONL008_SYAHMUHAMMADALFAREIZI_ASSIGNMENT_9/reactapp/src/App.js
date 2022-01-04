import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then((result) => setDatas(result));
  }, []);
  return (
    <>
      <Header />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {datas.map((data) => (
        <Content
          key={data.id}
          title={data.title}
          body={data.body}
          date={data.date}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
