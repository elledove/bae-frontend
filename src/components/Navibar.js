import React from 'react';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap/';
import {useSelector} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';



export const Navibar = () => {

  const user = useSelector( (state) => state.user)



  
return (


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Navbar.Brand href="#home">Bless And Eat</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="/">Home</Nav.Link> */}
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      {/* <Nav.Link href="/menu">Menu</Nav.Link> */}
      <LinkContainer to="/menu">
      <Nav.Link>Menu</Nav.Link>
      </LinkContainer>
      {
        !user.loggedIn && (<>
        <Nav.Link href="/sign-up">Sign-Up</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link></>
        )      
      } 
      {/* <Nav.Link href="/orders/new">Order</Nav.Link> */}
      <LinkContainer to="/orders/new">
      <Nav.Link>Order</Nav.Link>
      </LinkContainer>
      
      <NavDropdown title="" id="collasible-nav-dropdown">
      <LinkContainer to="/orders">
        <NavDropdown.Item>View Past Orders</NavDropdown.Item>
        </LinkContainer>

        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

