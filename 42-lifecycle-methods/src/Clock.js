import React, { Component } from 'react'

class Clock extends Component {

  constructor(props) {

    super(props)

    this.state = {
      time: new Date().toLocaleString('en-US', { timezone: 'America/New York' })
    }

  }

  render() {

    return (

      <h2>New York City: {this.state.time}</h2>

    )

  }
}

export default Clock
