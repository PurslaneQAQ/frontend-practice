import React from 'react';
import {
  HashRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Page from './components/page';
import routerConfig from './router-config';
import './App.scss';
import cat from './images/cat.svg';

const App:React.FC = () => (
  <div className="App">
    <Router>
      <Switch>
        {routerConfig.map(({ path, ...rest }) => (
          <Route
            key={path}
            path={path}
            render={() => (
              <Page {...rest} />
            )}
          />
        ))}
        <Route
          path="/"
          render={() => (
            <Page title="Frontend Practice -- Home">
              <img className="w-20 mb-5" alt="cat" src={cat} />
              <h1 className="text-xl mb-5">Home</h1>
              <nav>
                {routerConfig.map(({ path, title }) => (
                  <li key={path}><Link to={path} title={title}>{title}</Link></li>
                ))}
              </nav>
            </Page>
          )}
        />
      </Switch>
    </Router>
  </div>
);

export default hot(module)(App);
