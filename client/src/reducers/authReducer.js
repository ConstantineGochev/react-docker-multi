import {AUTH_STATE} from '.././actions/types'

var initialState = {authenticated: false}


export default function(state = initialState, actions) {
    switch (actions.type) {
        case AUTH_STATE:
            
            return state;
    
        default:
            return state;
    }
}