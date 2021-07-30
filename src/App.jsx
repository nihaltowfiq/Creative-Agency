import { useState, createContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    Login,
    AddService,
    EnrolledServices,
    Home,
    MakeAdmin,
    Order,
    Review,
    ServedList,
    NotFound,
} from './pages';
import { PrivateRoute } from './components/others';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) setLoggedInUser(JSON.parse(user));
    }, []);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Redirect from="/home" to="/" />
                    <Route path="/login" component={Login} />
                    <Route path="/order" component={Order} />
                    <PrivateRoute path="/customer/order/:id">
                        <Order />
                    </PrivateRoute>
                    <Route path="/customer/enrolled-services">
                        <EnrolledServices />
                    </Route>
                    <Route path="/customer/review" component={Review} />
                    <PrivateRoute path="/admin/service-list">
                        <ServedList />
                    </PrivateRoute>
                    <Route path="/admin/add-service" component={AddService} />
                    <Route path="/admin/make-admin" component={MakeAdmin} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
