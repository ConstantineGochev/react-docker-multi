import {AUTH_STATE, AUTH_ERRORS, REGISTER, REGISTER_ERRORS } from '.././actions/types'

var initialState = {
    authenticated: false,
    token: '',
    msg: '',
    errors: {
        auth_error: '',
        reg_error: ''
    }
}


export default function(state = initialState, actions) {
    switch (actions.type) {

        case AUTH_STATE:
        console.log(actions.payload)
          state.token = actions.payload
          state.errors.auth_error = null
          state.authenticated = true
        
            return state
        case AUTH_ERRORS:
            console.log(actions.payload)
            state.errors.auth_error = actions.payload;
            state.authenticated = false;
            return state
        case REGISTER:
            console.log(actions.payload)

            state.msg = actions.payload

            return state
        case REGISTER_ERRORS:
            state.errors.reg_error = actions.payload
            return state
        default:
            return state;
    }
}