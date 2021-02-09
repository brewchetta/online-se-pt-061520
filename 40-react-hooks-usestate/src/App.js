import React from 'react'
import HungerMeter from './HungerMeter'

function App() {

  return (
    <div className="App">

      <HungerMeter name={"Chett"} isHungry={false} />
      <HungerMeter name={"Octavia"} isHungry={true} />

    </div>
  );

}

export default App;
