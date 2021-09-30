import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navlink.css'
const Navlink = () => {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className="fw-bolder fs-1 fst-italic">MealDB</Navbar.Brand>
    <Nav className="ms-auto nav-design  align-items-center">
    <NavLink className="text-white " activeStyle={{
                fontWeight:'bold',
                color:'purple'
            }} to="/home">
                Home
            </NavLink>
            <NavLink className="text-white" activeStyle={{
                fontWeight:'bold',
                color:'purple'
            }} to="/meals">
                Menu
            </NavLink> 
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navlink;