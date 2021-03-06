import { applyMiddleware, createStore } from 'redux'//applyMiddleware is for use of thunk
import Data from './Reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Data, composeWithDevTools(applyMiddleware(thunk)));
export default store;