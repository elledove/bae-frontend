import './App.css';
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import MenuItems from './containers/MenuItemsContainer';
import OrdersContainer from './containers/OrdersContainer';
import OrderForm from './components/OrderForm';
import Home from './components/Home';

class App extends Component {
  
  
  render() { 
    return ( 
      <div className="App">
        Hello World! Its Me!
        <h4>To see the menu visit:  http://localhost:3001/menu</h4>
        <h4>To see your orders vist:  http://localhost:3001/orders</h4>
         <h4>To place an order vist: http://localhost:3001/orders/new </h4>
         <Route path='/orders/new'component={OrderForm}/>
         <Route exact path='/orders'component={OrdersContainer}/>
         <Route path="/menu" component={MenuItems}/>
         <Route path="/home" component={Home}/>

        
        
      </div>
     );
  }
}
 
export default App;