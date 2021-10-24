import React from 'react';
import {
  HashRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'antd/dist/antd.css';
import './App.scss';
import TipCalculator from './TipCalculator';
import TimeTrackingDashbaord from './TimeTrackingDashboard';
import cat from './images/cat.svg';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tip-calculator"><TipCalculator /></Route>
          <Route path="/time-tracking-dashboard"><TimeTrackingDashbaord /></Route>
          <Route path="/">
            <>
              <img className="w-20 mb-5" alt="cat" src={cat} />
              <p>Home</p>
              <nav>
                <li>
                  <Link to="/tip-calculator" title="Tip calculator">Tip calculator</Link>
                </li>
                <li>
                  <Link to="/time-tracking-dashboard" title="Time Tracking Dashboard">Time Tracking Dashboard</Link>
                </li>
              </nav>
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(module)(App);
