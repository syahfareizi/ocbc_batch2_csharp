const initialState = {
  queue: []
}

export default function queueReducer (state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'ADD_QUEUE':
      return { ...state, queue: [ ...state.queue, payload ] }
    default:
      return state
  }
}
