import React from 'react'
import ClassBobber from './ClassBobber'

class ClassFishingTimer extends React.Component {

  state = {
    cast: false,
    fishCaught: 0
  }

  handleClick = () => {
    const randomTime = Math.floor(Math.random() * 5000)
    this.setState({cast: true}, () => {
      this.timer = setTimeout(() => {
        this.setState({fishOnHook: true})
      }, randomTime)
    })
  }

  handleGotFish = () => {
    this.setState({cast: false})
  }

  incrementFishCaught = () => {
    this.setState({fishCaught: this.state.fishCaught + 1})
  }

  render() {
    return (
      <div>

        {this.state.cast ? <ClassBobber handleGotFish={this.handleGotFish} incrementFishCaught={this.incrementFishCaught} /> : null}

        <button onClick={this.handleClick}>Cast</button>

        <p>You've caught {this.state.fishCaught} fish!</p>

      </div>
    )
  }

}

export default ClassFishingTimer
