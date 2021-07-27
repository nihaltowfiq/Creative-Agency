import { useState, createContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Home } from './pages';
import { NotFound, PrivateRoute } from './components/others';
import { Login } from './components/templates';
import Order from './components/ClientRole/Order';
import EnrolledServices from './components/ClientRole/EnrolledServices';
import Review from './components/ClientRole/Review';
import ServedList from './components/AdminRole/ServedList';
import AddService from './components/AdminRole/AddService';
import MakeAdmin from './components/AdminRole/MakeAdmin';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

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
                    <Route path="/customer/enrolledServices">
                        <EnrolledServices />
                    </Route>
                    <Route path="/customer/review" component={Review} />
                    <PrivateRoute path="/admin/serviceList">
                        <ServedList />
                    </PrivateRoute>
                    <Route path="/admin/addService" component={AddService} />
                    <Route path="/admin/makeAdmin" component={MakeAdmin} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
