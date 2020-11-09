import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startCreateUser} from '../actions/userAction';


class Registration extends Component {
    state = { 
        email: "",
        password:"",
        passwordConfirmation:""

     }

     

     handleSubmit =(e) =>{
        const {startCreateUser} = this.props;
         console.log(this.state)
        e.preventDefault();
        startCreateUser(this.state);
        this.setState({
            email: "",
        password:"",
        passwordConfirmation:""
        })
        this.props.history.push("/login")
     }


     handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })

     }



    render() { 
        return ( <div className="-register-form-div">
                  <h3> Sign up to place an order</h3>
                  <br/>

                    <form onSubmit={this.handleSubmit}>
                    <label> Email:</label> {" "}
                    <input type="email" name="email"value={this.state.email} placeholder="enter email address" onChange={this.handleChange}/>
                    <br></br>
                    <label> Enter Password:</label> {" "}
                    <input type="password" name="password"value={this.state.password} placeholder="enter password" onChange={this.handleChange}/>
                    <br></br>
                    <label> Enter Password Again:</label> {" "}
                    <input type="password" name="passwordConfirmation"value={this.state.passwordConfirmation}  placeholder="confirm password"  onChange={this.handleChange}/>
                    <br></br>
                    <button type="submit"> Sign-Up</button>



                    </form>




        </div> );
    }
}
 
export default connect(null,{startCreateUser})(Registration);



