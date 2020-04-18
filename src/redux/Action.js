import { LODA_DATA } from './actionType'
import fetchWeather from '../services/BackendAPI'

const LoadData = (city) => {
    // console.log(city)
    return async dispatch => {   
        let data = await fetchWeather(city);
        dispatch({
            type: LODA_DATA,
            data:data
        })
        // console.log(data)
        
    }

}

export default LoadData;