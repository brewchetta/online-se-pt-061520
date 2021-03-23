import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import busyReducer from './busyReducer'

export default combineReducers({ students: studentReducer, busySignal: busyReducer })
