import { useEffect, useState } from "react";
import Card from "../components/Card";

function Todos() {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setTodos(result));
  }, []);
  return (
    <>
      {/* PAGES 3 */}
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

export default Todos;
