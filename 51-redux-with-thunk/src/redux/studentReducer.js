function studentReducer(state = [], action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload]
    case "LOAD_STUDENTS":
      return action.payload
    default:
      return state
  }
}

export default studentReducer
