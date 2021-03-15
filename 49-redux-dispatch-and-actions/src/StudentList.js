import React from 'react'
import { connect } from 'react-redux'
import { removeStudentAction } from './redux/actions'

class StudentList extends React.Component {

  renderStudents = () => {
    return this.props.students.map(student => (
      <p onClick={() => this.props.removeStudent(student)}>Name: {student.name} | Age: {student.age} | Avg Grade: {student.grade}</p>
    ))
  }

  render() {
    return (

      <div id="student-list">

        <h3>Student Roster</h3>

        {this.renderStudents()}

      </div>

    )
  }

}

const mapStateToProps = (state) => {
  const { students } = state
  return { students }
}

const mapDispatchToProps = dispatch => {
  return {
    removeStudent: studentToRemove => dispatch(removeStudentAction(studentToRemove))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
