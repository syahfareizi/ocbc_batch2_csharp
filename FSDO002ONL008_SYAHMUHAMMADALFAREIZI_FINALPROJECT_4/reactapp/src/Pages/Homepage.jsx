import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Resultcard from "../Components/Resultcard";
import logo from "../logo.svg";

function Home() {
  return (
    <>
      <Header />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Resultcard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
