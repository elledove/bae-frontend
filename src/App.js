import './App.css';
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuItems from './containers/MenuItemsContainer';
import OrdersContainer from './containers/OrdersContainer';
import OrderForm from './components/OrderForm';
import Home from './components/Home';
import Registration from './components/Registration';
import {checkLoggedInStatus} from './actions/userAction';
import Login from './components/Login';

class App extends Component {
  componentDidMount(){
    this.props.checkLoggedInStatus();
  }
  
  
  render() { 
    console.log(this.props.user)
    return ( 
      <div className="App">
        Hello World! Its Me!
        <h4>To see the menu visit:  http://localhost:3001/menu</h4>
        <h4>To see your orders vist:  http://localhost:3001/orders</h4>
         <h4>To place an order vist: http://localhost:3001/orders/new </h4>
         <Route path='/orders/new'component={OrderForm}/>
         <Route exact path='/orders'component={OrdersContainer}/>
         <Route path="/menu" component={MenuItems}/>
         <Route path="/sign-up" component={Registration}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path="/" render={ (props) => <Home 
         currentUser={this.props.user} loggedIn={this.props.loggedIn} {...props}/>}/>
        
        
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn

})
 
export default connect(mapStateToProps,{checkLoggedInStatus}) (App);