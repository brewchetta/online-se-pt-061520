import React from 'react'
import { loginRequest } from '../services/api'

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    loginRequest({username, password}).then(console.log)
  }

  handleChangeUsername = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleChangePassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <p style={{color: 'red'}}>{this.state.message}</p>

          <input type="text"
          name="username"
          onChange={this.handleChangeUsername}
          value={this.state.username}
          />

          <input type="password"
          onChange={this.handleChangePassword}
          value={this.state.password}
          />

          <input type="submit"
          value="Login"
          />

        </form>

      </div>
    )
  }

}

export default Login
