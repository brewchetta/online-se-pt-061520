import { useState } from 'react'
import { fetchUsers } from './fetches'

export default function UserProfiles() {

  const [profiles, setProfiles] = useState([])

  const handleClick = () => {
    fetchUsers().then(data => {
      data.message ? alert(data.message) : setProfiles(data)
    })
  }

  const renderProfiles = () => {
    return profiles.map(p => <p key={p.id}>{p.id}. {p.username}</p>)
  }

  return (
    <div id="profile">

      <button onClick={handleClick}>Fetch Users</button>

      {renderProfiles()}

    </div>
  )

}
