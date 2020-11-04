export default function orderReducer(state = {orders:[]},action){
    switch(action.type){
        case 'FETCH_ORDERS':
            return{...state,orders:action.payload}
                
            
    }
    
    
    
    return state;

}