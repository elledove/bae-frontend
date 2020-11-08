export default function orderReducer(state = {orders:[]},action){
    switch(action.type){
        case 'FETCH_ORDERS':
            return{...state,orders:action.payload}
        case "ADD_ORDERS":
            return {
                ...state,
                orders: [...state.orders,action.payload]

            }    
           default: return state;     
            
    }
    
    

}