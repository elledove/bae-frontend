import './App.css';
import React,{Component} from 'react';
import MenuItems from './containers/MenuItemsContainer';
import Orders from './containers/OrdersContainer';


class App extends Component {
  
  
  render() { 
    return ( 
      <div className="App">
        Hello World! Its Me!
        <Orders/>
      </div>
     );
  }
}
 
export default App;