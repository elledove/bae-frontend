import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logOut} from '../actions/userAction';
// import {Caro} from './Caro';
 class Logout extends Component {

handleLogOut = () => {
     this.props.logOut();
}



   render(){
    return(
        <div>
       
        <br/>
        {this.props.currentUser ? this.props.currentUser.email : null }
        Status:  {this.props.loggedIn ? "You're Logged In" : null}
        {" "}
        <br></br>
        <button onClick={this.handleLogOut}> Sign Out </button>
        {/* <Caro/> */}
        </div>
     )

   }



     
    
}



export default connect(null,{logOut})(Logout);


