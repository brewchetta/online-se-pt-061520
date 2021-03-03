import React, {useState} from 'react'
import FunctionalBobber from './FunctionalBobber'

function FunctionalFishingTimer() {

  const [cast, setCast] = useState(false)
  const [fishCaught, setFishCaught] = useState(0)

  const handleClick = () => {
    const randomTime = Math.floor(Math.random() * 5000)
    setCast(true)
  }

  const handleGotFish = () => {
    setCast(false)
  }

  const incrementFishCaught = () => {
    setFishCaught(fishCaught + 1)
  }

  return (
    <div>

      {cast ? <FunctionalBobber handleGotFish={handleGotFish} incrementFishCaught={incrementFishCaught} /> : null}

      <button onClick={handleClick}>Cast</button>

      <p>You've caught {fishCaught} fish!</p>

    </div>
  )

}

export default FunctionalFishingTimer
