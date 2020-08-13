/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Generate from '../View/Generate';
import Saved from '../View/Saved';

export default function Patch() {
  return (
    <Router>
      <div className="router">
        <Switch>
          <Route exact path="/" component={Generate} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}