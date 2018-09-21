import {combineReducers} from 'redux'
import boatsDataReducer from './boatsDataReducer'
import authReducer from './authReducer';
import {reducer as burgerMenu} from 'redux-burger-menu';

export default combineReducers({
    test: (state={},actions) => state,
    boats: boatsDataReducer,
    auth: authReducer,
    menu:burgerMenu
})