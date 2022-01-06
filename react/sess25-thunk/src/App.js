import './App.css';

import Counter from './components/Counter';
import logo from './logo.svg';

// import store from './store';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter />
        </header>
      </div>
  );
}

export default App;
