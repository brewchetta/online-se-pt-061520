import React, { useState, useEffect } from 'react'

function Plant() {

  const [growth, setGrowth] = useState("no seed")

  useEffect(() => {
    // initial effect
    const growthInterval = setInterval(() => {
      switch (growth) {
        case "no seed":
          setGrowth("seedling")
          break;
        case "seedling":
          setGrowth("shrub")
          break;
        case "shrub":
          setGrowth("tree")
          break;
        case "tree":
          setGrowth("timber")
          break;
        default:
          setGrowth("fire")
      }
    }, 2000)

    // cleanup phase
    return () => clearInterval(growthInterval)

    // dependency array
  }, [growth])

  return (
    <p>Plant Status: {growth}</p>
  )

}

export default Plant
