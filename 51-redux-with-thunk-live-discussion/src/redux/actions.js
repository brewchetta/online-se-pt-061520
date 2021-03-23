const URL = 'http://localhost:3000/'
const parseJSON = res => res.json()

export function loadStudents() {
  return (dispatch) => {
    dispatch({ type: 'FETCHING' })
    fetch(URL + 'students').then(parseJSON)
    .then(data => {
      dispatch({ type: 'LOAD_STUDENTS', payload: data })
    })
  }
}
