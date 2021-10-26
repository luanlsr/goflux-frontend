import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import App from '../App';
import Shippers from '../pages/Shippers';
import Carriers from '../pages/Carriers';
import Offers from '../pages/Offers';
import Bids from '../pages/Bids';

import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ App } />
      <Route exact path="/shippers" component={ Shippers } />
      <Route exact path="/carriers" component={ Carriers } />
      <Route exact path="/offers" component={ Offers } />
      <Route exact path="/bids" component={ Bids } />

      <Route component={ NotFound } />
    </Switch>
  );
}
