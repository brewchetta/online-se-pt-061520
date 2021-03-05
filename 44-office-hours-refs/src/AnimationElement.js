import React, { useRef } from 'react'

function AnimationElement(props) {

  const animatedDiv = useRef(null)

  const handlePlay = () => {
    console.log("We ought to play the animation when this is clicked!")
    console.log(animatedDiv)
    animatedDiv.current.style.animationPlayState = "running"
  }

  const handlePause = () => {
    console.log("We ought to pause the animation when this is clicked!")
    animatedDiv.current.style.animationPlayState = "paused"
  }

  return (
    <div>

      <button onClick={handlePlay}>Click Me to Play the Animation!</button>
      <button onClick={handlePause}>Click Me to Pause the Animation!</button>

      <br/>

      <div ref={animatedDiv} id="animated-div" />

    </div>
  )

}

export default AnimationElement
