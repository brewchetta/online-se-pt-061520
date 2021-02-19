import React from 'react'

class CalculatorForm extends React.Component {

  state = {}

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return(
      <form id="calculator-form" onSubmit={this.handleSubmit}>

        <input type="number"/>

        <select>

          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">x</option>
          <option value="divide">/</option>

        </select>

        <input type="number"/>

        <span> = Some Number</span>

      </form>
    )
  }

}

export default CalculatorForm
