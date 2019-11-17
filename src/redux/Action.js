import { LODA_DATA } from './actionType'
import BackendAPI from '../services/BackendAPI'

const loadData = () => {
    return async dispatch => {   
        let data = await BackendAPI.fetchWeather();
        await dispatch({
            type: LODA_DATA,
            data:data
        })
        // console.log(data)
    }
}

export default loadData;