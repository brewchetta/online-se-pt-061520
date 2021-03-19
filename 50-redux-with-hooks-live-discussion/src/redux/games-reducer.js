const defaultState = [
  {
    title: "Resident Evil",
    console: "PS1"
  }
]

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.payload]
    case "REMOVE_GAME":
      return state.filter(game => game !== action.payload)
    default:
      return state
  }
}

export default reducer
