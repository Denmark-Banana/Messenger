import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import List from '../Routes/List';
import Room from '../Routes/Room';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/room/:id" component={Room} />
        <Redirect from="*" to="/list" />
      </Switch>
    </>
  </Router>
);
