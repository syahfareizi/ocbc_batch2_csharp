import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
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
        <Button name="Hallo Alex"></Button>
        <Header batch='2' logo={logo}  />
        <Counter />
      </header>
    </div>
  );
}

export default App;
