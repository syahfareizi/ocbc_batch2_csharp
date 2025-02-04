import logo from "./logo.svg";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { toBacklog } from "./store/action/inputToBacklog";
import { toInputTask } from "./store/action/toInput";
import { toInporgress } from "./store/action/backlogToOnproggress";
import { toEvaluate } from "./store/action/onproggressToEvaluate";
import { toDone } from "./store/action/evaluateToDone";
import { toClear } from "./store/action/doneToClear";

function App() {
  const dispatch = useDispatch();
  const task = useSelector(({ task }) => task);

  return (
    <>
      {/* {JSON.stringify(task)} */}
      <Header />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="m-3">
            <input
              type="text"
              value={task.inputtask}
              onChange={(e) => dispatch(toInputTask(e.target.value))}
            />
          </form>
          <button
            className="btn btn-primary m-3 "
            onClick={() => dispatch(toBacklog(task.inputtask))}
          >
            Add Task
          </button>
        </div>
        <div className="row">
          <div className="col">
            <Card
              tipe={"primary"}
              header={"Backlog"}
              title={[...task.backlogtask]}
              btnbody={"Take"}
              fungsi={toInporgress}
            />
          </div>
          <div className="col">
            <Card
              tipe={"secondary"}
              header={"In Progress"}
              title={[...task.inproggresstask]}
              btnbody={"Evaluate"}
              fungsi={toEvaluate}
            />
          </div>
          <div className="col">
            <Card
              tipe={"danger"}
              header={"Evaluation"}
              title={[...task.evaluatetask]}
              btnbody={"Done"}
              fungsi={toDone}
            />
          </div>
          <div className="col">
            <Card
              tipe={"success"}
              header={"Done"}
              title={[...task.donetask]}
              btnbody={"Clear"}
              fungsi={toClear}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
