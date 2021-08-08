import { Button, Nav, Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthCtx } from '../../../../store';

export const Headbar = () => {
    const { loggedInUser, onLogout } = useAuthCtx();
    const history = useHistory();
    const { pathname, hash } = useLocation();

    return (
        <Navigation expand="lg" id="headbar">
            <Navbar.Brand href="">
                <img onClick={() => history.push('/')} style={{ height: '40px' }} src="/images/logos/logo.png" alt="" />
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
                    <Nav.Link href="" onClick={() => history.push('/admin/service-list')} className="nav-link mr-4">
                        Admin Panel
                    </Nav.Link>
                </Nav>
                {!loggedInUser.email ? (
                    <Button onClick={() => history.push('/login')} variant="dark">
                        Login
                    </Button>
                ) : (
                    <Button onClick={onLogout} variant="dark">
                        Logout, {loggedInUser.name}
                    </Button>
                )}
            </Navbar.Collapse>
        </Navigation>
    );
};

const Navigation = styled(Navbar)`
    .active {
        border-bottom: 3px solid #7ab259;
    }
`;
