import './App.css';
import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuItems from './containers/MenuItemsContainer';
import OrdersContainer from './containers/OrdersContainer';
import OrderForm from './components/OrderForm';
import Home from './components/Home';
import Registration from './components/Registration';
import {checkLoggedInStatus} from './actions/userAction';
import Login from './components/Login';
import Logout from './components/Logout';
import {Navibar} from './components/Navibar';
import logo from './images/bae-logo.jpg'
import Footer from './components/Footer';


class App extends Component {
  componentDidMount(){
    this.props.checkLoggedInStatus();
  }
  
  
  render() { 
    console.log(this.props.user)
    return ( 
      <Router>
        <Navibar/>
       
      <div className="App">
        
        <br></br>
        <img src={logo} alt="Bless-and-Eat-Logo"/>
        <h3> <em>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God." - Cor.10:31 </em> </h3>
           <br/>
         <Route exact path='/orders/new'component={OrderForm}/>
         <Route exact path='/orders'component={OrdersContainer}/>
         <Route path="/menu" component={MenuItems}/>
         <Route path="/sign-up" component={Registration}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/" component={Home}/>
        <Route exact path="/logout" render={ (props) => <Logout 
         currentUser={this.props.user} loggedIn={this.props.loggedIn} {...props}/>}/>
         <Footer/>
      </div>
      </Router>
     );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  loggedIn: state.user.loggedIn

})
 
export default connect(mapStateToProps,{checkLoggedInStatus}) (App);