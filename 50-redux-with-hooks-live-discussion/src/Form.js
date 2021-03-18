import React from 'react'
import { connect } from 'react-redux'

class Form extends React.Component {

  state = {
    title: '',
    console: ''
  }

  handleChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  handleChangeConsole = event => {
    this.setState({console: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const payload = { ...this.state }

    this.props.addGame(payload)

    this.setState({ title: '', console: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <input type="text"
        onChange={this.handleChangeTitle}
        value={this.state.title}
        placeholder={"title"}
        />

        <input type="text"
        onChange={this.handleChangeConsole}
        value={this.state.console}
        placeholder={"console"}
        />

        <input type="submit"
        value={"Add Videogame"}
        />

      </form>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return  {
    addGame: newGame => dispatch({type: 'ADD_GAME', payload: newGame})
  }
}

export default connect(null, mapDispatchToProps)(Form)
