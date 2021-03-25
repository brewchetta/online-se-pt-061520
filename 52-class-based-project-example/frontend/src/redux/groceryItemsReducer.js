export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload.grocery_items || state
    case "ADD_GROCERY_ITEM":
      return [...state, action.payload]
    case "REMOVE_GROCERY_ITEM":
      return state.filter(item => item !== action.payload)
    default:
      return state
  }
}
