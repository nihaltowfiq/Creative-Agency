import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/ClientRole/Order/Order';
import EnrolledServices from './components/ClientRole/EnrolledServices/EnrolledServices';
import Review from './components/ClientRole/Review/Review';
import ServedList from './components/AdminRole/ServedList/ServedList';
import AddService from './components/AdminRole/AddService/AddService';
import MakeAdmin from './components/AdminRole/MakeAdmin/MakeAdmin';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path="/order/">
            <Order></Order>
          </Route>
          <PrivateRoute path="/customer/order/:id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/customer/enrolledServices">
            <EnrolledServices></EnrolledServices>
          </Route>
          <Route path="/customer/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/admin/serviceList">
            <ServedList></ServedList>
          </PrivateRoute>
          <Route path="/admin/addService">
            <AddService></AddService>
          </Route>
          <Route path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
