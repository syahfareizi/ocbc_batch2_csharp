import { createStore } from "redux";
// const Redux = require("redux");
// yang harus disiapkan
// initial state
const initialState = {
  counter: 0,
};

// reducer
function Reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "increment":
      return { ...state, counter: state.counter + payload };
    case "decrement":
      return { ...state, counter: state.counter - payload };
    case "addby10":
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
}

// redux
const store = createStore(Reducer);

store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "increment", payload: 10 });

export default store;
