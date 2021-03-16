import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {

  renderVideoGames = () => {
    return this.props.games.map(g => <p key={g.title}>{g.title} | {g.console}</p>)
  }

  render() {
    return (
      <div>
        {this.renderVideoGames()}
      </div>
    )
  }

} // END CLASS

const mapStateToProps = state => {
  return { games: state.games }
}

export default connect(mapStateToProps)(List)
