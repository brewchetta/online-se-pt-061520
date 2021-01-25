import React, { Component } from 'react'
import OurSecondComponent from './OurSecondComponent'

export default class OurFirstComponent extends Component {

  render() {
    return (
      <>
        <p>{this.props.message}</p>
        <OurSecondComponent />
      </>
    )
  }

}
