import { useState } from 'react'

export default function LoginForm({handleLogin}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
      default:
        return null
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleLogin({user: {username, password}})
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>

      <input type="text"
      name="username"
      onChange={handleChange}
      value={username}
      placeholder="username"
      />

      <input type="text"
      name="password"
      onChange={handleChange}
      value={password}
      placeholder="password"
      />

      <input type="submit"
      value="Login"
      />

    </form>
  )

}
