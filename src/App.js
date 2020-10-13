import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Methods from './components/pages/Methods';
//import Solutions from './components/pages/Solutions';
//import Resources from './components/pages/Resources';
import Graphic from './components/Notices/Graphic';
import Sensibility from './components/Notices/Sensibility';
import Simplex from './components/Notices/Simplex';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/graphic' component={Graphic} />
          <Route path='/sensibility' component={Sensibility} />
          <Route path='/simplex' component={Simplex} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

