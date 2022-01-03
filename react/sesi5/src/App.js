import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Content/>
      <hr></hr>
      <Footer/>
      <hr></hr>
    </div>
  );
}

export default App;
