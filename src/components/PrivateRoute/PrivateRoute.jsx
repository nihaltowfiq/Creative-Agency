import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ component, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    component
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
