export default function menuReducer(state = {menu_items:[]},action){
    switch(action.type){
        case 'FETCH_MENU':
            return{menu_items:action.payload}
                
            default: return state;
    }
    
    
    
    

}