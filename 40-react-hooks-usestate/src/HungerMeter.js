import React from 'react'

export default function HungerMeter(props) {

  return (
    <p>{props.name} is {props.isHungry ? "hungry" : "well fed"}</p>
  )

}
