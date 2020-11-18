import React, { Component } from 'react';
import {connect} from 'react-redux';
import addOrder from '../actions/addOrder';
import {fetchMenuItems} from '../actions/fetchMenuItems';
import { CheckBox } from './CheckBox';




class OrderForm extends Component {
    state = { 
    name_for_order: '',
    menu_item_ids: []

     }

     componentDidMount(){
        this.props.fetchMenuItems();
   
       }

       handleCheckBox = e => {
           if ( this.state.menu_item_ids.includes(e.target.value)) {

               this.setState( state => {
                   return { menu_item_ids: state.menu_item_ids.filter(item => item !== e.target.value )}
               })
           } else {
            this.setState( state => {
                return { menu_item_ids: [...state.menu_item_ids,e.target.value]}
            })
           }
           
       }
     handleChange =(event) =>{
        // debugger;
        this.setState({
            //Here we are abstracting and using key:value pairs from input tags name:value
            [event.target.name]: event.target.value
        })
     }


     handleSubmit = (event) => {
         //Keeps page from re-rendering and losing our form data;
         event.preventDefault();
         this.props.addOrder(this.state);
        //  this.props.history.push("/orders")
        this.props.history.push({
            pathname: '/orders',
            state:this.setState({ [event.target.name]: event.target.value})
        });
        
     }



    render() { 
        return ( <div>
            <form id="orderform" onSubmit={this.handleSubmit}>
            <label>Name For Order:</label>
           <input type="text" placeholder="name for order"name="name_for_order" value={this.state.name_for_order} onChange={this.handleChange}/>
           <br></br>
           <br></br>
           <br></br>
                {this.props.menuItems.map( (item) =>
                    
                    <CheckBox key={item.id} {...item} handleCheckBox={this.handleCheckBox}/>  
                    )}

    
           <input type="submit"/>
 
            </form>
            
            <br></br>
            
           


           
        </div> );
    }
}

const mapStateToProps =(state) =>{
    console.log("this is just state for menu", state)
    console.log("This is THE state for menu", state.menuz.menu_items)
    
    return {menuItems: state.menuz.menu_items}
 }
export default connect(mapStateToProps,{addOrder,fetchMenuItems}) (OrderForm);