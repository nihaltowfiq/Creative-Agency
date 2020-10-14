import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Headbar = () => {
    const history = useHistory();
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home"><img style={{ height: "40px" }} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                    <Nav.Link href="#home" className="nav-link mr-4">Home</Nav.Link>
                    <Nav.Link href="#home" className="nav-link mr-4">Our Portfolio</Nav.Link>
                    <Nav.Link href="#home" className="nav-link mr-4">Our Team</Nav.Link>
                    <Nav.Link href="#home" className="nav-link mr-4">Contact Us</Nav.Link>
                </Nav>
                <Button onClick={() => history.push('/login')} variant="dark">Login</Button>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headbar;