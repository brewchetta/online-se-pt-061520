// packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
// style
import './App.css';
// services
import { clearToken, getToken } from './services/local-storage'

function App() {

  const handleLogout = () => {
    clearToken()
  }

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/" render={() => <Home />} />

          <Route path="/login" render={routerProps => <Login {...routerProps} />} />

          <Route path="/profile" render={() => <Profile />} />

        </Switch>

        {getToken() ? <button onClick={handleLogout}>Logout</button> : null}

      </div>
    </Router>
  );
}

export default App;
