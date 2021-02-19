import React from 'react'

class CalculatorForm extends React.Component {

  state = {
    valueOne: 1,
    valueTwo: 1,
    operator: "add"
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleReset = e => {
    this.setState({valueOne: 1, valueTwo: 1, operator: "add"})
  }

  calculateOutcome = () => {
    const {operator, valueOne, valueTwo} = this.state
    switch (operator) {
      case "add":
        return parseInt(valueOne) + parseInt(valueTwo)
      case "subtract":
        return parseInt(valueOne) - parseInt(valueTwo)
      case "multiply":
        return parseInt(valueOne) * parseInt(valueTwo)
      case "divide":
        return parseInt(valueTwo) !== 0 ? parseInt(valueOne) / parseInt(valueTwo) : "NaN"
      default:
        console.error("Something went really wrong!")
    }
  }

  render() {
    return(
      <form id="calculator-form" onSubmit={this.handleSubmit}>

        <input name="valueOne" type="number" onChange={this.handleChange} value={this.state.valueOne} />

        <select name="operator" value={this.state.operator} onChange={this.handleChange}>

          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">x</option>
          <option value="divide">/</option>

        </select>

        <input name="valueTwo" type="number" onChange={this.handleChange} value={this.state.valueTwo} />

        <span> = {this.calculateOutcome()}</span>

        <br/>

        <p>ValueOne is: {this.state.valueOne}</p>
        <p>Value Two is: {this.state.valueTwo}</p>
        <p>Operator is: {this.state.operator}</p>

        <input type="button"
        value={"Reset"}
        onClick={this.handleReset} />

      </form>
    )
  }

}

export default CalculatorForm
