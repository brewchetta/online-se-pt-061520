import React, { Component } from 'react'

class Clock {

  constructor(props) {

    super(props)

    state = {
      time: new Date()
    }

  }

  render() {

    return (

      <p>{this.state.time}</p>

    )

  }
}

export default Clock
