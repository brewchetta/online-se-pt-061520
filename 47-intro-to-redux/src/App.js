import React from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import './App.css';

class App extends React.Component {

  state = {
    students: []
  }

  handleSubmitStudent = student => {
    this.setState({students: [...this.state.students, student]})
  }

  render() {
    return (

      <div className="App">

        <h1>Redux</h1>

        <StudentForm handleSubmitStudent={this.handleSubmitStudent} />

        <StudentList students={this.state.students} />

      </div>

    )
  }
}

export default App;
