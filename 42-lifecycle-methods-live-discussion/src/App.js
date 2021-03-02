import React, { Component } from 'react'
import Clock from './Clock'
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

        {this.renderClocks()}

      </div>
    )
  }

}

export default App;
