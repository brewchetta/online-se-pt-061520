import React from 'react'
import { profileRequest } from '../services/api'

class Profile extends React.Component {

  componentDidMount() {
    profileRequest().then(console.log)
  }

  render() {
    return (
      <div>

        <h1>Your Profile!</h1>

      </div>
    )
  }

}

export default Profile
