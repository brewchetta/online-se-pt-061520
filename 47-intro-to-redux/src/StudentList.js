import React from 'react'

class StudentList extends React.Component {

  renderStudents = () => {
    return this.props.students.map(s => <p>Name: {s.name} | Age: {s.age} | Avg Grade: {s.grade}</p>)
  }

  render() {
    return (

      <div id="studnet-list">

        <h3>Student Roster</h3>

        {this.renderStudents()}

      </div>

    )
  }

}

export default StudentList
