import React, { useState } from 'react'
import HungerMeter from './HungerMeter'

function App() {

  const [chettIsHungry, setChettIsHungry] = useState(false)
  const [octaviaIsHungry, setOctaviaIsHungry] = useState(true)
  const [ursulaIsHungry, setUrsulaIsHungry] = useState(true)

  return (
    <div className="App">

      <HungerMeter name={"Chett"} isHungry={chettIsHungry} />
      <HungerMeter name={"Octavia"} isHungry={octaviaIsHungry} />
      <HungerMeter name={"Ursula"} isHungry={ursulaIsHungry} />

      <button onClick={() => setChettIsHungry(true)}>Let Chett Get Hungry</button>

    </div>
  );

}

export default App;
