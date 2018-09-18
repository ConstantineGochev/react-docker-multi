import {BOATS_DATA} from '.././actions/types'

var initialState = []


export default (state= initialState, actions) => {
    switch (actions.type) {
        case BOATS_DATA:

            return actions.payload.data
    
        default:
            return state;
    }
}