import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrders} from '../actions/fetchOrders';
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
    
    return {orders: state.orderz.orders}
    

}
 
export default connect(mapStateToProps,{fetchOrders}) (OrdersContainer);