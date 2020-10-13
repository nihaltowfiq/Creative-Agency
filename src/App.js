import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
      <Route to="/login">
          <Login></Login>
        </Route>
        <Route exact to="/">
          <Home></Home>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
