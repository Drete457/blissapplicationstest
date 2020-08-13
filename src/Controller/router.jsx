/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Patch() {
  return (
    <Router>
      <div className="router">
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}