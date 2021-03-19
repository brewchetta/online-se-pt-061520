import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = props => {

  const [title, setTitle] = useState('')
  const [consoleBrand, setConsoleBrand] = useState('')

  const dispatch = useDispatch()

  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }

  const handleChangeConsole = event => {
    setConsoleBrand(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const payload = { title, consoleBrand }

    // previously we had:
    // this.props.addGame(payload)
    dispatch({type: 'ADD_GAME', payload})

    setTitle('')
    setConsoleBrand('')
  }

    return (
      <form onSubmit={handleSubmit}>

        <input type="text"
        onChange={handleChangeTitle}
        value={title}
        placeholder={"title"}
        />

        <input type="text"
        onChange={handleChangeConsole}
        value={consoleBrand}
        placeholder={"console"}
        />

        <input type="submit"
        value={"Add Videogame"}
        />

      </form>
    )
  }

// const mapDispatchToProps = dispatch => {
//   return  {
//     addGame: newGame => dispatch({type: 'ADD_GAME', payload: newGame})
//   }
// }

export default Form
