import React, { Component } from "react"

class NewComponent extends Component {

  render() {
    const {name, profession} = this.props
    return <p>My name is {name} the mighty {profession}</p>
  }

}

export default NewComponent
