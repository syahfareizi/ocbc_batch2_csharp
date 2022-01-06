import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../store/Actions/CounterAction";
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(({ counter }) => counter.counter);

  function increment() {
    dispatch(incrementAction());
  }
  function decrement() {
    dispatch({ type: "decrement", payload: 1 });
  }
  function addBy10() {
    dispatch({ type: "addby10", payload: 10 });
  }
  return (
    <>
      <h2>LET'S COUNT</h2>
      <hr />
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
    </>
  );
}

export default Counter;
