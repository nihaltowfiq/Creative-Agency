/* eslint-disable no-unused-vars */
import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { Login as LoginComponent } from '../components/templates';
import { firebaseConfig } from '../libs/api';
import { useAuthCtx } from '../store';

export const Login = () => {
    const { onLogin } = useAuthCtx();
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
            .then(({ user }) => {
                const { displayName: name, email, photoURL: img } = user;
                onLogin({ name, email, img });
                history.replace(from);
            })
            .catch(({ message }) => console.log(message));
    };

    return (
        <Fragment>
            <LoginComponent loginHandler={handleGoogleSignIn} />
        </Fragment>
    );
};
