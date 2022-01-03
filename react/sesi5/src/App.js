import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  const [Name, setName] = useState("Budi");
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setTodos(result));
  }, []);

  function changeName() {
    return setName("Faris");
  }
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Content />
      <hr></hr>
      <Footer />
      <hr></hr>
      <p>Hallo {Name}</p>
      <p> TODO LIST </p>
      {Todos.map((todo) => (
        <div key={todo.id}>
          {todo.title} - {todo.completed ? "Completed" : "Pending"}
        </div>
      ))}
      <button onClick={changeName}> Change my Name! </button>
      <Counter />
    </div>
  );
}

export default App;
