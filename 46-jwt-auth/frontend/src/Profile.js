// import { useState } from 'react'

export default function Profile({backendURL}) {

  const fetchProfile = () => {
    fetch(backendURL + '/api/v1/my-profile')
    .then(console.log)
  }

  return (
    <div id="profile">

      <button onClick={fetchProfile}>Get Profile If Logged In</button>

    </div>
  )

}
