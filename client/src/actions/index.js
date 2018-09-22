import axios from 'axios';
import {BOATS_DATA, LOGIN, AUTH_STATE, MENU_STATE} from './types'



export const fetch_boats_data = () => async dispatch => {

    const res = await axios.get('/api/boats');

    dispatch({
        type: BOATS_DATA,
        payload: res
    })
}

export const login_user = (data) => async dispatch => {
    await axios.post('/api/signin', data).then((res) => {
        dispatch({
            type: AUTH_STATE,
            payload: res.data.token
        })

    }).catch((err) => {
        console.log(err)
        dispatch({
            type: AUTH_STATE,
            payload: false
        })
    })

}
