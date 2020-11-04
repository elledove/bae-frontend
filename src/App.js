import './App.css';
import React,{Component} from 'react';
import MenuItems from './containers/MenuItemsContainer';
import Orders from './containers/OrdersContainer';


class App extends Component {
  
  
  render() { 
    return ( 
      <div className="App">
        Hello World! Its Me!
        <h4>To see the menu visit:  http://localhost:3001/menu</h4>
        <h4>To see your orders vist:  http://localhost:3001/orders</h4>
         <h4>To place an order vist: http://localhost:3001/orders/new </h4>
         
        <Orders/>
        <MenuItems/>
      </div>
     );
  }
}
 
export default App;