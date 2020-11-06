import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/userAction';


class Login extends Component {
    state = { 
        email: "",
        password:"",
        

     }

     

     handleSubmit =(e) =>{
        const {startLogin} = this.props;
         console.log(this.state)
        e.preventDefault();
        startLogin(this.state);
        this.setState({
            email: "",
        password:"",
        
        })
     }


     handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })

     }



    render() { 
        return ( <div>

                    <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email"value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
                    {" "}
                    <button type="submit"> Login</button>



                    </form>




        </div> );
    }
}
 
export default connect(null,{startLogin})(Login);



