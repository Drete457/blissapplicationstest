/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Generate from '../View/Generate';
import Saved from '../View/Saved';
import Start from '../View/Start';

export default function Patch() {
  return (
    <Router>
      <div className="router">
        <Switch>
          <Route exact path="/generate" component={Generate} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Start} />
        </Switch>
      </div>
    </Router>
  );
};