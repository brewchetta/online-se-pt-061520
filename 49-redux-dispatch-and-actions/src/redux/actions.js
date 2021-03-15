export const ADD_STUDENT = "ADD_STUDENT"
export const REMOVE_STUDENT = "REMOVE_STUDENT"

export const addStudentAction = newStudent => {
  return {
    type: ADD_STUDENT,
    payload: newStudent
  }
}

export const removeStudentAction = student => {
  return {
    type: REMOVE_STUDENT,
    payload: student
  }
}
