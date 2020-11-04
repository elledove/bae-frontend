import React, { Component } from 'react';



class OrderForm extends Component {
    state = {  }
    render() { 
        return ( <div>
            <form id="orderform">
            <label for="fname">Name For Order:</label>
           <input type="text" placeholder="name for order"name="name_for_order"/>
           <input type="submit"/>

                
            </form>
            <label for="cars">Choose Your Food:</label>
            <label>      </label>
           


           
        </div> );
    }
}
 
export default OrderForm;