import React from 'react'

class StudentForm extends React.Component {

  state = {
    name: '',
    age: '',
    grade: 'A'
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmitStudent(this.state)
    this.setState({name: '', age: '', grade: 'A'})
  }

  render() {
    return (

      <form id="student-form" onSubmit={this.handleSubmit}>

        <input type="text"
        name="name"
        onChange={this.handleChange}
        value={this.state.name}
        placeholder='name'
        />

        <input type="text"
        name="age"
        onChange={this.handleChange}
        value={this.state.age}
        placeholder='age'
        />

        <select name="grade" value={this.state.grade} onChange={this.handleChange}>
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

}

export default StudentForm
