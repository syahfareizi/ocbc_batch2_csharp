import { useDispatch, useSelector } from 'react-redux';

import { incrementCounter } from '../store/actions/counterActions';

function Counter () {
  const dispatch = useDispatch()
  const counter = useSelector(({ counter }) => counter.counter)

  function increment(){
    dispatch(incrementCounter())
  }

  function decrement(){
    dispatch({ type: 'DECREMENT', payload: 1 })
  }

  function addBy10(){
    dispatch({ type: 'INCREMENT', payload: 10 })
  }

  return (
    <>
      <h2>Let's count!</h2>
      <hr />
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
    </>
  )
}

export default Counter
