import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

export const Login = ({ loginHandler }) => {
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
                    <Button onClick={loginHandler} variant="light">
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
