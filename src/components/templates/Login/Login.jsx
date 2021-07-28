/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserContext } from '../../../App';
import { firebaseConfig } from '../../../libs/api';

export const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName: name, email, photoURL: img } = result.user;
                setLoggedInUser({ name, email, img });
                localStorage.setItem(
                    'user',
                    JSON.stringify({ name, email, img })
                );
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <Container className="text-center">
            <Link to="/home">
                <img
                    className="mt-5"
                    style={{ height: '50px' }}
                    src="/images/logos/logo.png"
                    alt=""
                />
            </Link>
            <Row className="justify-content-md-center mt-3">
                <div className="login-card mt-5">
                    <h3>Login With</h3>
                    <Button onClick={handleGoogle} variant="light">
                        <img src="/images/icons/google.png" alt="" /> Continue
                        with Google
                    </Button>
                    <p>
                        Don't have an account?{' '}
                        <a
                            href="https://accounts.google.com/signup?hl=en"
                            target="blank"
                        >
                            Create an account.
                        </a>
                    </p>
                </div>
            </Row>
        </Container>
    );
};
