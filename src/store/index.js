// * 1. import
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import counterReducer from './reducers/counterReducer';
import queueReducer from './reducers/queueReducer';

// * 2. reducer dengan combine reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  queue: queueReducer
})

// * 3. createStore()
const middleware = applyMiddleware(thunk, logger)
const store = createStore(
  rootReducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

// ? store.subscribe() menerima sebuah function sebagai parameter-nya
store.subscribe(() => console.log(store.getState()))

// ? store.dispatch() menerima object literal sebagai parameter-nya
// ? { type, payload } --> disesuaikan dengan reducer-nya
// store.dispatch({ type: 'INCREMENT', payload: 10 })

export default store
