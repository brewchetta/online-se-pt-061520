import { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import UserProfiles from './UserProfiles'
import './App.css';
import { fetchLogin } from './fetches'

function App() {

  const [user, setUser] = useState({})

  const handleLogin = credentials => {
    fetchLogin(credentials).then(data => {
      data.message && alert(data.message)
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt)
        setUser(data.user)
      }
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    setUser({})
  }

  return (
    <div className="App">

      <p>{user.username ? `Welcome ${user.username}` : null}</p>

      <h1>JWT with React</h1>

      <LoginForm handleLogin={handleLogin} />

      <button onClick={handleLogout}>Logout</button>

      <UserProfiles backendURL={BACKEND_URL} />

    </div>
  );
}

export default App;
