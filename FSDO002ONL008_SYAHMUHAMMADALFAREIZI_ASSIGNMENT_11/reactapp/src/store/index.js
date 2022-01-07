import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import taskReducer from "./reducer/TaskReducer";

const rootReducer = combineReducers({
  task: taskReducer,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, compose(middleware));

store.subscribe(() => console.log(store.getState()));

export default store;
