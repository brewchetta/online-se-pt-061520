import React, { Component } from 'react'

class FormElement extends Component {

  handleClick = () => {
    console.log("Let's do things")
  }

  render() {
    return (
      <div>

        <input type="text"
        placeholder={"Hello I am an input field!"}
        />

        <button onClick={this.handleClick}>Click Me to Focus the Input</button>

      </div>
    )
  }

}

export default FormElement
