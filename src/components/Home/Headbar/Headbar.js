import React from 'react';
import { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const Headbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    return (
        <Navbar expand="lg">
            <Navbar.Brand href=""><img onClick={() => history.push('/')} style={{ height: "40px" }} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                    <Nav.Link href="" onClick={() => history.push('/home')} className="nav-link mr-4">Home</Nav.Link>
                    <Nav.Link href="#ourWorks" className="nav-link mr-4">Our Portfolio</Nav.Link>
                    <Nav.Link href="#contactUs" className="nav-link mr-4">Contact Us</Nav.Link>
                    <Nav.Link href="" onClick={() => history.push('/admin/serviceList')} className="nav-link mr-4">Admin Panel</Nav.Link>
                </Nav>
                {
                    !loggedInUser.email ? <Button onClick={() => history.push('/login')} variant="dark">Login</Button>
                        : <Button onClick={() => setLoggedInUser({})} variant="dark">Logout, {loggedInUser.name}</Button>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Headbar;