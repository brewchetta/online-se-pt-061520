import React, { useState, useEffect } from 'react'

function Clock(props) {

  const [time, setTime] = useState(new Date().toLocaleString('en-US', { timeZone: props.timezone }))

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date().toLocaleString('en-US', { timeZone: props.timezone }))
    }, 1000)

    return () => {
      clearInterval(interval)
    }

  }, [props])

  return (

    <h2>{props.timezone}: {time}</h2>

  )

}

export default Clock
