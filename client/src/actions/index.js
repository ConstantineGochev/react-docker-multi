import axios from 'axios';
import {BOATS_DATA, AUTH_STATE, AUTH_ERRORS, REGISTER, REGISTER_ERRORS} from './types'



export const fetch_boats_data = () => async dispatch => {

    const res = await axios.get('/api/boats');

    dispatch({
        type: BOATS_DATA,
        payload: res
    })
}

export const login_user = (data, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/signin', data)
        dispatch({
            type: AUTH_STATE,
            payload: response.data.token
        })
        localStorage.setItem('token',response.data.token)
        callback()

    }catch(e){
        dispatch({
            type: AUTH_ERRORS,
            payload: 'Invalid credentials.'
        })

    }
}
export const register_user = (data) => async dispatch =>  {
    try{
        var response = await axios.post('/api/signup', data)
        console.log(response)
        dispatch({
            type: REGISTER,
            payload: 'Validate you account by clicking the link in your email.'
        })

    }catch(e) {
        //console.log(e)
        dispatch({
            type: REGISTER_ERRORS,
            payload: 'Email is in use.'//response.data.errors 
        })

    }

  
}
    // await axios.post('/api/signin', data).then((res) => {
    //     dispatch({
    //         type: AUTH_STATE,
    //         payload: res.data.token
    //     })

    // }).catch((err) => {
    //   //  console.log(err)
    //     dispatch({
    //         type: AUTH_STATE,
    //         payload: false
    //     })
    // })

//}
