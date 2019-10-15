import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// components
import Login from './components/Login'
import Friends from './components/Friends'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/friends' component={Friends} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
