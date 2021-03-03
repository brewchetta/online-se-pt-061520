import React, {useState, useEffect} from 'react'

function FunctionalBobber(props) {

  const [fishOnHook, setFishOnHook] = useState(false)

  const handleClick = () => {
    props.handleGotFish()
  }

  useEffect(() => {
    // initial effect
    const randomTime = Math.floor(Math.random() * 5000)
    const timer = setTimeout(() => {
      setFishOnHook(true)
    }, randomTime)

    // cleanup
    return () => {
      clearTimeout(timer)
      if (fishOnHook) {
        props.incrementFishCaught()
      }
    }
    // dependency array
  }, [fishOnHook, props])

  return (
    <div>

      <p>{!fishOnHook ? "Bobber" : "Bobber is going crazy"}</p>

      <button onClick={handleClick}>Reel In Fish</button>

    </div>
  )

}

export default FunctionalBobber
