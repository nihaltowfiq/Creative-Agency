import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <Container className="text-center">
            <Link to="/home"><img className="mt-5" style={{height: '50px'}} src={logo} alt="" /></Link>
            <Row className="justify-content-md-center mt-3">
                <div className="login-card mt-5">
                    <h3>Login With</h3>
                    <Button variant="light"><img src={googleIcon} alt="" /> Continue with Google</Button>
                    <p>Don't have an account? <a href="https://accounts.google.com/signup?hl=en" target="blank">Create an account.</a></p>
                </div>
            </Row>
        </Container>
    );
};

export default Login;