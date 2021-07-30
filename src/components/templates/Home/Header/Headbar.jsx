import { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../App';

export const Headbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { pathname, hash } = useLocation();

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setLoggedInUser({});
    };

    return (
        <Navbar expand="lg" id="headbar">
            <Navbar.Brand href="">
                <img
                    onClick={() => history.push('/')}
                    style={{ height: '40px' }}
                    src="/images/logos/logo.png"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                    <Nav.Link
                        href=""
                        onClick={() => history.push('/home')}
                        className="nav-link mr-4"
                        active={pathname === '/' && hash === ''}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        href="#ourWorks"
                        className="nav-link mr-4"
                        active={pathname === '/' && hash === '#ourWorks'}
                    >
                        Our Portfolio
                    </Nav.Link>
                    <Nav.Link
                        href="#contactUs"
                        className="nav-link mr-4"
                        active={pathname === '/' && hash === '#contactUs'}
                    >
                        Contact Us
                    </Nav.Link>
                    <Nav.Link
                        href=""
                        onClick={() => history.push('/admin/service-list')}
                        className="nav-link mr-4"
                    >
                        Admin Panel
                    </Nav.Link>
                </Nav>
                {!loggedInUser.email ? (
                    <Button
                        onClick={() => history.push('/login')}
                        variant="dark"
                    >
                        Login
                    </Button>
                ) : (
                    <Button onClick={handleLogOut} variant="dark">
                        Logout, {loggedInUser.name}
                    </Button>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};
