import React from 'react'
import { connect } from 'react-redux'

class StudentList extends React.Component {

  renderStudents = () => {
    return this.props.students.map(s => <p>Name: {s.name} | Age: {s.age} | Avg Grade: {s.grade}</p>)
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

export default connect(mapStateToProps)(StudentList)
