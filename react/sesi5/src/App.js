import "./App.css";
import "bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";

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
    <>
      <Header />
      <div>
        <Content />
      </div>
      <Footer />
      <hr></hr>
      <div className="App">Hallo {Name}</div>
      <div className="App">
        <button onClick={changeName}> Change my Name! </button>
      </div>
      <Counter />
      <div className="App"> TODO LIST </div>
      {Todos.map((todo) => (
        // <div key={todo.id}>
        //   {todo.title} - {todo.completed ? "Completed" : "Pending"}
        // </div>
        <Card
          key={todo.id}
          title={todo.title}
          status={todo.completed}
          userId={todo.userId}
        ></Card>
      ))}
    </>
  );
}

export default App;
