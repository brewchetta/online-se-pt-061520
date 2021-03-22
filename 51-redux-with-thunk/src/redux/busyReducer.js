function busyReducer(state = false, action) {
  switch (action.type) {
    case "FETCHING":
      return true
    case "LOAD_STUDENTS":
      return false
    default:
      return state
  }
}

export default busyReducer
