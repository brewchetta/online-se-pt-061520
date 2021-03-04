import React from 'react'

function VideoElement(props) {

  const handleClick = () => {
    console.log("We ought to play the video when this is clicked!")
  }

  return (
    <div>

      <button onClick={handleClick}>Click Me to Play the Video!</button>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/7ftp_JR0KEc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )

}

export default VideoElement
