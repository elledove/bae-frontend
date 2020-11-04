import React, { Component } from 'react';
import {connect} from 'react-redux';



class OrderForm extends Component {
    state = { 
        name: '',
    lquantity: 0,
    bpquantity: 0,
    squantity: 0,
    strwbryquantity: 0

     }


     handleChange =(event) =>{
        // debugger;
        this.setState({
            //Here we are abstracting and using key:value pairs from input tags name:value
            [event.target.name]: event.target.value
        })
     }


     handleSubmit = (event) => {
         event.preventDefault();
     }



    render() { 
        return ( <div>
            <form id="orderform" onSubmit={this.handleSubmit}>
            <label>Name For Order:</label>
           <input type="text" placeholder="name for order"name="name" value={this.state.name} onChange={this.handleChange}/>
           <br></br>
           <br></br>
           <br></br>
           <label for="entres"> Choose Your Entres Quantity: </label>
           <br></br>
           <br></br>
           <label> Lasagna</label>
          ---
           <input type="number" id="quantity" name="lquantity" min="0" max="5" value={this.state.lquantity} onChange={this.handleChange}/>
           <br></br>
          <label> Salmon Platter</label>
          ---
          <input type="number" id="quantity" name="squantity" min="0" max="3" value={this.state.squantity} onChange={this.handleChange}/>

           <br></br>
           <label> Banana Pudding</label>
          ---
          <input type="number" id="quantity" name="bpquantity" min="0" max="3" value={this.state.bpquantity} onChange={this.handleChange}/>
          <br></br>
          <label> Strawberry Lemonade</label>
          ---
          <input type="number" id="quantity" name="strwbryquantity" min="0" max="3" value={this.state.strwbryquantity} onChange={this.handleChange}/>

          <br></br>

          




           <input type="submit"/>

                
            </form>
            
            <br></br>
            
           


           
        </div> );
    }
}
 
export default OrderForm;