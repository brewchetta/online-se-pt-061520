import React from 'react'
import { connect } from 'react-redux'
import { loadStudents } from './redux/actions'

class StudentList extends React.Component {

  renderStudents = () => {
    return this.props.students.map(s => <p key={s.name}>Name: {s.name} | Age: {s.age} | Avg Grade: {s.grade}</p>)
  }

  handleClick = () => {
    this.props.dispatch(loadStudents())
  }

  render() {
    return (

      <div id="student-list">

        <h3>Student Roster</h3>

        {this.renderStudents()}

        <button onClick={this.handleClick}>{this.props.busySignal ? "Fetching..." : "Refresh Students"}</button>

      </div>

    )
  }

}

const mapStateToProps = (state) => {
  const { students, busySignal } = state
  return { students, busySignal }
}

export default connect(mapStateToProps)(StudentList)
