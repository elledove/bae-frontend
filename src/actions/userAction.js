export const startCreateUser = (data) => {
    // console.log("start create")
    return (dispatch) => {
        fetch("http://localhost:3001/registrations", {
            method: "POST",
            credentials: "include",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => dispatch(finishCreateUser(data)));
    };
};

const finishCreateUser = (data) => {
    // console.log("Finish")
    return{
    type: "CREATE_USER",
    payload: data,
    }
}

export const checkLoggedInStatus = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/logged_in",{
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => dispatch(setCurrentUser(data)));
    };
}

const setCurrentUser = (data) => {
    return{
        type:"SET_CURRENT_USER",
        payload:data,
    }
}

export const startLogin = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3001/sessions", {
            method: "POST",
            credentials: "include",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => dispatch(finishLogin(json)))
    }

}

const finishLogin = (data) => {
    return {
        type:"LOGIN",
        payload: data
    }
}












export const logOut = () => {
   
    return (dispatch) =>{
        
        fetch("http://localhost:3001/logout",{
        method: "DELETE",
        credentials: "include",
        })
        .then( () => dispatch(finishLogOut()))
    }
}


const finishLogOut = () => {
    
    return{
        type:"LOG_OUT"
    }
}