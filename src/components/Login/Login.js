import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/icons/google.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    };
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <Container className="text-center">
            <Link to="/home"><img className="mt-5" style={{ height: '50px' }} src={logo} alt="" /></Link>
            <Row className="justify-content-md-center mt-3">
                <div className="login-card mt-5">
                    <h3>Login With</h3>
                    <Button onClick={handleGoogle} variant="light"><img src={googleIcon} alt="" /> Continue with Google</Button>
                    <p>Don't have an account? <a href="https://accounts.google.com/signup?hl=en" target="blank">Create an account.</a></p>
                </div>
            </Row>
        </Container>
    );
};

export default Login;