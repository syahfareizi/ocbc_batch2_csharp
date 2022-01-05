import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default App;
