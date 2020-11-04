import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
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
            <Route path='/orders/new'component={OrderForm}/>

            {/* <OrderForm/> */}
            <br></br>

            <Route exact path='/orders' render ={ () =><OrderList orders={this.props.orders} />}/>
            {/* <OrderList orders={this.props.orders} /> */}
        </div> );
    }
}


const mapStateToProps =(state) =>{
    console.log("this is just state", state)
    console.log("This is THE state of orders", state.orderz.orders)
    
    return {orders: state.orderz.orders}
    

}
 
export default connect(mapStateToProps,{fetchOrders}) (OrdersContainer);