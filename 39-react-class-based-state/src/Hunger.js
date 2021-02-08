import React, {Component} from "react"

class Hunger extends Component {

  // Can also hold state in child components
  // state={
  //   hungry: true
  // }

  render() {
    return (
      <p onClick={this.props.handleClick}>{this.props.name} is {this.props.hungerMeter}</p>
    )
  }

}

export default Hunger
