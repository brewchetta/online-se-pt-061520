import React, { Component } from 'react'

export default class HungerMeter extends Component {

  state = {
    isHungry: this.props.isHungry
  }

  render() {

    console.log(this.state);

    return (

      <p onClick={() => this.setState({isHungry: !this.state.isHungry})}>
        {this.props.name} is {this.state.isHungry ? "hungry" : "well fed"}
      </p>

    )

  }

}
