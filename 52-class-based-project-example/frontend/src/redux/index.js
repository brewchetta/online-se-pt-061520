import { combineReducers } from 'redux'
import userReducer from './userReducer'
import groceryItemsReducer from './groceryItemsReducer'

export default combineReducers({user: userReducer, groceryItems: groceryItemsReducer})
