// packages
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// redux
import { connect } from 'react-redux'
import { getUser } from './redux/actions/userActions'
// components
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
// style
import './App.css';
// services
import { clearToken, getToken } from './services/local-storage'

class App extends React.Component {

  handleLogout = () => {
    clearToken()
  }

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <Router>
      <div className="App">

      <Switch>

      <Route exact path="/" render={() => <Home />} />

      <Route path="/login" render={routerProps => <Login {...routerProps} />} />

      <Route path="/profile" render={() => <Profile />} />

      </Switch>

      {getToken() ? <button onClick={this.handleLogout}>Logout</button> : null}

      </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(null, mapDispatchToProps)(App)
