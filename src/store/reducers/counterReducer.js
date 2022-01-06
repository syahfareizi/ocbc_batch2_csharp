// * 1 - buat initialState
// * 2 - buat reducer, kemudian export
const initialState = {
  counter: 0
}

export default function counterReducer (state = initialState, action) {
  const { type, payload } = action

  switch(type){
    case 'INCREMENT':
      return { ...state, counter: state.counter + payload }
    case 'DECREMENT':
      return { ...state, counter: state.counter - payload }
    default:
      return state
  }
}
