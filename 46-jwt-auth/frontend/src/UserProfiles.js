import { useState } from 'react'
import { BACKEND_URL } from './constants'

export default function UserProfiles() {

  const [profiles, setProfiles] = useState([])

  const fetchProfile = () => {
    fetch(BACKEND_URL + 'users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      data.message ? alert(data.message) : setProfiles(data)
    })
  }

  const renderProfiles = () => {
    return profiles.map(p => <p key={p.id}>{p.id}. {p.username}</p>)
  }

  return (
    <div id="profile">

      <button onClick={fetchProfile}>Fetch Users</button>

      {renderProfiles()}

    </div>
  )

}
