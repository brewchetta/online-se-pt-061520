import React from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import './App.css';

class App extends React.Component {

  render() {
    return (

      <div className="App">

        <h1>Redux</h1>

        <StudentForm />

        <StudentList />

      </div>

    )
  }
}

export default App;
