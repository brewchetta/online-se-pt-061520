import React, { Component } from 'react'

class Clock extends Component {

  constructor(props) {

    super(props)

    this.state = {
      time: new Date().toLocaleString('en-US', { timeZone: 'EST' })
    }

  }

  render() {

    return (

      <h2>EST: {this.state.time}</h2>

    )

  }
}

export default Clock
