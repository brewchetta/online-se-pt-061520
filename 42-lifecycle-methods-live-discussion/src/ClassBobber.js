import React from 'react'

class ClassBobber extends React.Component {

  state = {
    fishOnHook: false
  }

  handleClick = () => {
    this.props.handleGotFish()
  }

  componentDidMount() {
    const randomTime = Math.floor(Math.random() * 5000)
    this.timer = setTimeout(() => {
      this.setState({fishOnHook: true})
    }, randomTime)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    if (this.state.fishOnHook) {
      this.props.incrementFishCaught()
    }
  }

  render() {
    return (
      <div>

        <p>{!this.state.fishOnHook ? "Bobber" : "Bobber is going crazy"}</p>

        <button onClick={this.handleClick}>Reel In Fish</button>

      </div>
    )
  }

}

export default ClassBobber
