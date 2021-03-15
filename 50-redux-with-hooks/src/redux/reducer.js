const defaultStore = {
  students: [
    {
      name: "Timmy",
      age: 111,
      grade: "A"
    }
  ]
}

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return {...state, students: [...state.students, action.payload]}
    case "REMOVE_STUDENT":
    console.log(state.students)
    console.log(action.payload)
      return {...state, students: state.students.filter(student => student !== action.payload)}
    default:
      return state
  }
}

export default reducer
