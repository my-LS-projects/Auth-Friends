import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// components
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import Friends from './components/Friends'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path='/protected' component={Friends}/>
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
