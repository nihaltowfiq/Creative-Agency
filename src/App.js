import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/ClientRole/Order/Order';
import EnrolledServices from './components/ClientRole/EnrolledServices/EnrolledServices';
import Review from './components/ClientRole/Review/Review';

function App() {
  return (
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
        <Route path="/client/order">
          <Order></Order>
        </Route>
        <Route path="/client/enrolledServices">
          <EnrolledServices></EnrolledServices>
        </Route>
        <Route path="/client/review">
          <Review></Review>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
