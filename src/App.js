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
import {Navbar, Nav,NavDropdown} from 'react-bootstrap/'
import {Navibar} from './components/Navibar';


class App extends Component {
  componentDidMount(){
    this.props.checkLoggedInStatus();
  }
  
  
  render() { 
    console.log(this.props.user)
    return ( 
      <div className="App">
        <Navibar/>
          {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Bless And Eat</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

 */}



        {/* <h1> Bless and Eat</h1> */}
        <br></br>
        <img src="images/bae-logo.jpg"/>
        <h3> <em>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God. - Cor.10:31 </em> </h3>
           <br/>
        

        {/* <h4>To see the menu visit:  http://localhost:3001/menu</h4>
        <h4>To see your orders vist:  http://localhost:3001/orders</h4>
         <h4>To place an order vist: http://localhost:3001/orders/new </h4> */}
         <Route path='/orders/new'component={OrderForm}/>
         <Route exact path='/orders'component={OrdersContainer}/>
         <Route path="/menu" component={MenuItems}/>
         <Route path="/sign-up" component={Registration}/>
         <Route exact path="/login" component={Login}/>
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