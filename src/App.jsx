import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/ClientRole/Order/Order';
import EnrolledServices from './components/ClientRole/EnrolledServices/EnrolledServices';
import Review from './components/ClientRole/Review/Review';
import ServedList from './components/AdminRole/ServedList/ServedList';
import AddService from './components/AdminRole/AddService/AddService';
import MakeAdmin from './components/AdminRole/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/order/" component={Order} />
                    <PrivateRoute
                        path="/customer/order/:id"
                        component={Order}
                    />
                    <Route
                        path="/customer/enrolledServices"
                        component={EnrolledServices}
                    />
                    <Route path="/customer/review" component={Review} />
                    <PrivateRoute
                        path="/admin/serviceList"
                        component={ServedList}
                    />
                    <Route path="/admin/addService" component={AddService} />
                    <Route path="/admin/makeAdmin" component={MakeAdmin} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
