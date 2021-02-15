import React from 'react'
import NewComponent from "./NewComponent.js"
import './App.css';

function App() {

  const people = [
    {name: "Chett", profession: "cohort lead"},
    {name: "Talia", profession: "education coach"},
    {name: "Ursula", profession: "cat"},
    {name: "Octavia", profession: "cat"},
  ]

  const renderPeople = () => {
    return people.map(person => <NewComponent name={person.name} profession={person.profession} />)
  }

  return (
    <div className="App">
      {renderPeople()}
    </div>
  )

}

export default App;
