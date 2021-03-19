import gamesReducer from './games-reducer'
import reviewsReducer from './reviews-reducer'
import { combineReducers } from 'redux'

export default combineReducers({ games: gamesReducer, reviews: reviewsReducer })
