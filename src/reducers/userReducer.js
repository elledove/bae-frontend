const INITIAL_STATE ={
    currentUser: null,
    loggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "CREATE_USER":
            return{
                ...state, 
                 currentUser: action.payload.user,
                 loggedIn: true,
            };
            case "SET_CURRENT_USER":
                return{
                    ...state, 
                 currentUser: action.payload.user,
                 loggedIn: action.payload.logged_in,

                };
            case "LOGIN":
                return{
                   ...state,
                   currentUser: action.payload.user,
                   loggedIn: action.payload.logged_in,

                    };


            case "LOG_OUT":
                console.log("Inside logout action")
                return {
                    ...state,
                    currentUser: null,
                    loggedIn: false,
                };
                    
                
        default:
            return state;
    }


}
export default userReducer;