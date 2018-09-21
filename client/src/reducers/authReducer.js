import {AUTH_STATE } from '.././actions/types'

var initialState = {
    authenticated: false,
    token: ''
}


export default function(state = initialState, actions) {
    switch (actions.type) {

        case AUTH_STATE:
        console.log(actions.payload)
        if(actions.payload === false) {
          state.authenticated = false     
        }else{
          state.token = actions.payload
          state.authenticated = true
        }
           
           return state
    
        default:
            return state;
    }
}