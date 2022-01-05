import "./App.css";
import "bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  matchRoutes,
} from "react-router-dom";
import Changename from "./pages/Changename";
import Todos from "./pages/Todos";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [Name, setName] = useState("Budi");
  // const [Todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((result) => setTodos(result));
  // }, []);

  // function changeName() {
  //   return setName("Faris");
  // }
  return (
    <>
      <Router>
        <Header />
        {/* <Link to="/">Home</Link>
        <Link to="/changename">Change Name Page</Link>
        <Link to="/todolist">Todo List Page</Link> */}
        <Routes>
          <Route path="/changename" element={<Changename />}></Route>
          <Route path="/todolist" element={<Todos />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
