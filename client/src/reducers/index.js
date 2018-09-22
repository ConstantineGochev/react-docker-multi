import {combineReducers} from 'redux'
import boatsDataReducer from './boatsDataReducer'
import authReducer from './authReducer';

export default combineReducers({
    test: (state={},actions) => state,
    boats: boatsDataReducer,
    auth: authReducer,
})