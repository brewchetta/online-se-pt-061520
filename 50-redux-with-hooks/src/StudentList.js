import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeStudentAction } from './redux/actions'

function StudentList(props) {

  const students = useSelector(state => state.students)
  const dispatch = useDispatch()

  const removeStudent = student => {
    dispatch(removeStudentAction(student))
  }

  const renderStudents = students.map(student => (
      <p onClick={() => removeStudent(student)}>Name: {student.name} | Age: {student.age} | Avg Grade: {student.grade}</p>
  ))

  return (

    <div id="student-list">

      <h3>Student Roster</h3>

      {renderStudents}

    </div>

  )

}

export default StudentList
