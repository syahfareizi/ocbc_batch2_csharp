const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
var store = Redux.createStore(counter);
var el = document.getElementById("counter");
const render = () => {
  el.innerHTML = store.getState().counter.toString();
};

render();
store.subscribe(render);

const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");

incrementElement.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
decrementElement.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
