import axios from 'axios';
import {BOATS_DATA} from './types'


export const fetch_boats_data = () => async dispatch => {

    const res = await axios.get('/api/boats');

    dispatch({
        type: BOATS_DATA,
        payload: res
    })
}