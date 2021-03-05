import React, { Component } from 'react'

class FormElement extends Component {

  handleClick = () => {
    console.log(this.chettsFancyInput)
    this.chettsFancyInput.current.focus()
  }

  chettsFancyInput = React.createRef()

  render() {
    return (
      <div>

        <input type="text"
        placeholder={"Hello I am an input field!"}
        ref={this.chettsFancyInput}
        />

        <button onClick={this.handleClick}>Click Me to Focus the Input</button>

      </div>
    )
  }

}

export default FormElement
