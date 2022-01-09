import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, compose(middleware));

store.subscribe(() => console.log(store.getState()));

export default store;
