import {LODA_DATA} from './actionType'
import {combineReducers} from 'redux'
 
export const Data = (state, action)=>{
    // console.log("actiontype是" + action.type)
    switch (action.type){
        case(LODA_DATA):
        console.log(action.data)
            return action.data;
        default:
            return []
    }
}

export default combineReducers({Data});