import React, { Component } from 'react'

class Clock extends Component {

  constructor(props) {

    super(props)

    this.state = {
      time: new Date().toLocaleString('en-US', { timeZone: props.timezone })
    }

  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({time: new Date().toLocaleString('en-US', { timeZone: this.props.timezone })})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const seconds = parseInt(nextState.time.split(" ")[1].split(":")[2])
    return !(seconds % 2)
  }

  render() {

    return (

      <h2>{this.props.timezone}: {this.state.time}</h2>

    )

  }

}

export default Clock
