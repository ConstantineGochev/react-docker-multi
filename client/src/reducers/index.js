import {combineReducers} from 'redux'
import boatsDataReducer from './boatsDataReducer'

export default combineReducers({
    test: (state={},actions) => state,
    boats: boatsDataReducer
})