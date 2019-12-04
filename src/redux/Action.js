import { LODA_DATA } from './actionType'
import BackendAPI from '../services/BackendAPI'

const LoadData = (city) => {
    // console.log(city)
    return async dispatch => {   
        let data = await BackendAPI.fetchWeather(city);
        await dispatch({
            type: LODA_DATA,
            data:data
        })
        // console.log(data)
        
    }

}

export default LoadData;