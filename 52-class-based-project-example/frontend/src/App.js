// packages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
// style
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path="/" render={() => <Home />} />

          <Route path="/login" render={() => <Login />} />

          <Route path="/profile" render={() => <Profile />} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
