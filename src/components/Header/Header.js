import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">English Training Center</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className="NavLink" to="/">Home</NavLink>
                        <NavLink className="NavLink" to="/services" >Services</NavLink>
                        <NavLink className="NavLink" to="/about">About Us</NavLink>
                        <NavLink className="NavLink" to="/contact">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;