import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudentAction } from './redux/actions'

function StudentForm(props) {

  const dispatch = useDispatch()

  const [formState, setFormState] = useState(
    {
      name: '',
      age: '',
      grade: 'A'
    }
  )

  const handleChange = event => {
    setFormState({...formState, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(addStudentAction(formState))
    setFormState({name: '', age: '', grade: 'A'})
  }

  return (

    <form id="student-form" onSubmit={handleSubmit}>

      <input type="text"
      name="name"
      onChange={handleChange}
      value={formState.name}
      placeholder='name'
      />

      <input type="text"
      name="age"
      onChange={handleChange}
      value={formState.age}
      placeholder='age'
      />

      <select name="grade" value={formState.grade} onChange={handleChange}>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='F'>F</option>
      </select>

      <input type="submit"
      value="Add Student"
      />

    </form>

  )

}

export default StudentForm
