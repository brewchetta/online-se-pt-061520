import React from 'react'
import { profileRequest } from '../services/api'

class Profile extends React.Component {

  state = {
    username: '',
    groceryItems: []
  }

  componentDidMount() {
    profileRequest()
    .then(res => {
      if (!res.error) {
        this.setState({username: res.username, groceryItems: res.grocery_items})
      }
    })
  }

  render() {
    return (
      <div>

        <h1>{this.state.username}'s Profile</h1>

      </div>
    )
  }

}

export default Profile
