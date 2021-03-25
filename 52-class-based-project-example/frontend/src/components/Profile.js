import React from 'react'
import { getUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'

class Profile extends React.Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    console.log(this.props.user);
    return (
      <div>

        {this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>}

      </div>
    )
  }
}

const mapStateToProps = state => {
  const {user, groceryItems} = state
  return {
    user, groceryItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
