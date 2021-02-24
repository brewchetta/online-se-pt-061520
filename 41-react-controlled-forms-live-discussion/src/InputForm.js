import React from 'react'

class InputForm extends React.Component {

  state = {
    inputValue: ""
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.inputValue)
    this.setState({inputValue: ""})
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <input type="text"
        onChange={this.handleChange}
        value={this.state.inputValue} />

      </form>

    )
  }

}

export default InputForm
