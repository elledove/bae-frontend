import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchOrders} from '../actions/fetchOrders';

import OrderList from "../components/OrderList";

import Order from '../components/Order'




class OrdersContainer extends Component {
    
    componentDidMount(){
     this.props.fetchOrders();

    }


    render() { 
        
        return ( <div>

             <h2> Recent Orders List</h2> 
            
            {this.props.orders.map(order =>
                <Order order={order} />                
            )}
            
            <br></br>

            
        </div> );
    }
}


const mapStateToProps =(state) =>{
    console.log("this is just state", state)
    console.log("This is THE state of orders", state.orderz.orders)
    
    return {orders: state.orderz.orders}
    

}
 
export default connect(mapStateToProps,{fetchOrders}) (OrdersContainer);