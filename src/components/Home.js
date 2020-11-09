import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logOut} from '../actions/userAction';
import {Caro} from './Caro';
 class Home extends Component {
    

render(){

   return(
      <div>

       <Caro/>

      </div>
   )


}







// handleLogOut = () => {
//      this.props.logOut();
// }



//    render(){
//     return(
//         <div>
       
//         <br/>
//         {this.props.currentUser ? this.props.currentUser.email : null }
//         Status:  {this.props.loggedIn ? "You're Logged In" : null}
//         {" "}
//         <br></br>
//         <button onClick={this.handleLogOut}> Sign Out </button>
//         <Caro/>
//         </div>
//      )

//    }



     
    
 }



 //export default connect(null,{logOut})(Home);

export default Home;
