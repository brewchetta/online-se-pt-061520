import React, {Component} from "react"

class GratitudeListItem extends Component {

  state = {
    gratefulness: 0,
    color: 'red'
  }

  handleClick = () => {
    this.setState({gratefulness: this.state.gratefulness + 1})

    if (this.state.gratefulness === 4) {
      this.setState({color: 'orange'})
    }

    // this.props.removeItem(this.props.item)
  }

  render() {
    return (
      <p>Grateful for {this.props.item}
        <button style={{backgroundColor: this.state.color}} onClick={this.handleClick}>{this.state.gratefulness}</button>
      </p>
    )
  }

}


export default GratitudeListItem
