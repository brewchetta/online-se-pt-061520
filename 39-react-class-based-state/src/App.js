import React, { Component } from 'react'
import Hunger from "./Hunger"

class App extends Component {

  state = {
    hungerMeters: {
      chett: "Hungry",
      octavia: "Hungry meow meow meow"
    },
    time: "9:00am"
  }

  handleFeedChett = () => {
    this.setState({hungerMeters: {...this.state.hungerMeters, chett: "Well Fed"}})
  }

  handleFeedOctavia = () => {
    this.setState({hungerMeters: {...this.state.hungerMeters, octavia: "Well Fed"}})
  }

  handleChangeTime = () => {
    this.setState({time: "6:00pm"})
  }

  render() {

    // deconstructing state for ease of use...
    const {time, hungerMeters} = this.state

    return (
      <div className="App">

        <p onClick={this.handleChangeTime}>It's {time} and...</p>

        <Hunger name={"Chett"} hungerMeter={hungerMeters.chett} handleClick={this.handleFeedChett} />

        <Hunger name={"Octavia"} hungerMeter={hungerMeters.octavia} handleClick={this.handleFeedOctavia} />

      </div>
    );

  }
}


export default App;
