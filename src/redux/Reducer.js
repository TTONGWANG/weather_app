import {LODA_DATA} from './actionType'
import {combineReducers} from 'redux'
const initialState = {
    city : " ",
   
}

export const Data = (state = initialState, action)=>{
    //console.log("actiontype是" + action.type)

    switch (action.type){
        case LODA_DATA:
        // console.log(state)
        // console.log(action.data)
            return {...state,...action.data}
        default:
            return [];
    }

}

export default combineReducers({Data});