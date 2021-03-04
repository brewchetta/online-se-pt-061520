import React from 'react'

function AnimationElement(props) {

  const handlePlay = () => {
    console.log("We ought to play the animation when this is clicked!")
  }

  const handlePause = () => {
    console.log("We ought to pause the animation when this is clicked!")
  }

  return (
    <div>

      <button onClick={handlePlay}>Click Me to Play the Animation!</button>
      <button onClick={handlePause}>Click Me to Pause the Animation!</button>

      <br/>

      <div id="animated-div" />

    </div>
  )

}

export default AnimationElement
