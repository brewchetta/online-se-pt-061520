import React, { Component } from 'react'
import Clock from './Clock'
import FunctionalFishingTimer from "./FunctionalFishingTimer"
import './App.css';

class App extends Component {

  state = {
    timezones: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/timezones')
    .then(res => res.json())
    .then(timezones => {
      this.setState({timezones})
    })
  }

  renderClocks = () => {
    return this.state.timezones.map(tz => <Clock key={tz} timezone={tz} />)
  }

  render() {

    return (
      <div className="App">

        <FunctionalFishingTimer />

      </div>
    )
  }

}

export default App;
