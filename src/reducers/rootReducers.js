import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';


let rootReducer =  combineReducers({
     menuz:menuReducer,
     orderz:orderReducer
})


export default rootReducer;