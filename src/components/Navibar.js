import React from 'react';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap/';


export const Navibar = () => (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Navbar.Brand href="#home">Bless And Eat</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/sign-up">Sign-Up</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/orders/new">Order</Nav.Link>
      
      <NavDropdown title="" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/orders">View Past Orders</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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

