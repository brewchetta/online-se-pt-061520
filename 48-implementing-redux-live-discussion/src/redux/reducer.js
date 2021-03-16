const defaultState = {
  games: [
    {
      title: "Resident Evil",
      console: "PS1"
    }
  ],
  reviews: [],
  likes: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_GAME":
      return {...state, games: [...state.games, action.payload]}
    default:
      return state
  }
}

export default reducer
