import LoginForm from './LoginForm'
import Profile from './Profile'
import './App.css';

const BACKEND_URL = 'http://localhost:3000'

function App() {

  const handleLogin = credentials => {
    fetch(BACKEND_URL + '/api/v1/auth', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(console.log)
  }

  return (
    <div className="App">
      <h1>JWT with React</h1>
      <LoginForm handleLogin={handleLogin} />
      <Profile backendURL={BACKEND_URL} />
    </div>
  );
}

export default App;
