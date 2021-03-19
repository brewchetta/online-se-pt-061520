import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const List = props => {

  const dispatch = useDispatch()

  const games = useSelector(state => state.games)

  const removeGame = game => {
    dispatch({type: "REMOVE_GAME", payload: game})
  }

  const renderVideoGames = () => {
    // previously we were able to use this.props.games
    // return this.props.games.map(g => <p key={g.title}>{g.title} | {g.console}</p>)
    return games.map(game => <p onClick={() => removeGame(game)} key={game.title}>{game.title} | {game.consoleBrand}</p>)
  }

  return (
    <div>
      {renderVideoGames()}
    </div>
  )

}

// const mapStateToProps = state => {
//   return { games: state.games }
// }

export default List
