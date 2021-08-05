/* eslint-disable no-unused-vars */
import { Fragment, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { Login as LoginComponent } from '../components/templates';
import { UserContext } from '../App';
import { firebaseConfig } from '../libs/api';

export const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
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
        <Fragment>
            <LoginComponent loginHandler={handleGoogleSignIn} />
        </Fragment>
    );
};
