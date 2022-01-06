import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import Queue from "./Reducers/QueueReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
// const Redux = require("redux");
// yang harus disiapkan
// initial state
const initialState = {
  counter: 0,
};

const rootReducer = combineReducers({
  counter: Counter,
  queue: Queue,
});
// reducer
function Counter(state = initialState, action) {
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
const middleware = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "increment", payload: 10 });

export default store;
