import './App.css';
import React,{Component} from 'react';

class App extends Component {
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then( info => console.log(info))
  }
  
  render() { 
    return ( 
      <div className="App">
        Hello World! Its Me!
      </div>
     );
  }
}
 
export default App;