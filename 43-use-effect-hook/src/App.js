import React, { useState, useEffect } from 'react'
import Clock from './Clock'
import './App.css';

function App(props) {

  const [timezones, setTimezones] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/timezones')
      .then(res => res.json())
      .then(timezones => {
        setTimezones(timezones)
      })
  }, [])

  const renderClocks = () => {
    console.log(timezones);
    return timezones.map(tz => <Clock key={tz} timezone={tz} />)
  }

  return (
    <div className="App">

      {renderClocks()}

    </div>
  )

}

export default App;
