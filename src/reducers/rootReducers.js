import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';


let rootReducer =  combineReducers({
     menuz:menuReducer,
     orderz:orderReducer,
     user:userReducer
})


export default rootReducer;