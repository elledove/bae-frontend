import React, { Component } from 'react';

class Registration extends Component {
    state = { 
        email: "",
        password:"",
        passwordConfirmation:""

     }



     handleSubmit =(e) =>{
         console.log(this.state)
        e.preventDefault();
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
                    <input type="passwordConfirmation" name="passwordConfirmation"value={this.state.passwordConfirmation} onChange={this.handleChange}/>
                    <button type="submit"> Sign-Up</button>



                    </form>




        </div> );
    }
}
 
export default Registration;



