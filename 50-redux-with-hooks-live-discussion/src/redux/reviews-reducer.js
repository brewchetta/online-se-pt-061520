const defaultState = [
  {
    title: "BEST GAME EVER!!!"
  }
]

function reviewsReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload]
    case "REMOVE_REVIEW":
      return state.filter(review => review !== action.payload)
    default:
      return state
  }
}

export default reviewsReducer
