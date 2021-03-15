// let originalState = 1
//
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload
//     case "DECREMENT":
//       return state - action.payload
//     default:
//       return state
//   }
// }
//
// const newAction = {
//   type: "INCREMENT",
//   payload: 6
// }
//
// function dispatch(action) {
//   newState = reducer(originalState, action)
// }
//
// dispatch(newAction)

let studentState = [
  {
    name: "Timmy",
    age: 12,
    grade: "C"
  }
]

function studentReducer(state = studentState, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload]
    default:
      return state
  }
}

const addJimmyAction = {
  type: "ADD_STUDENT",
  payload: {
    name: "Jimmy",
    age: 11,
    grade: "B"
  }
}

function dispatch(action) {
  studentState = studentReducer(studentState, action)
}

dispatch(addJimmyAction)
