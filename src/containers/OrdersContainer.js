import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrders} from '../actions/fetchOrders';
import OrderForm from '../components/OrderForm';
import OrderList from "../components/OrderList";





class OrdersContainer extends Component {
    
    componentDidMount(){
     this.props.fetchOrders();

    }


    render() { 
        return ( <div>

            Orders Container has:
            <OrderForm/>
            <OrderList orders={this.props.orders} />
        </div> );
    }
}


const mapStateToProps =(state) =>{
    //console.log("This is the state", state.orders)
    return {orders: state.orders}
    

}
 
export default connect(mapStateToProps,{fetchOrders}) (OrdersContainer);