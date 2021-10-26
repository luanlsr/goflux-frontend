import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shippers from '../pages/Shippers';
import Carriers from '../pages/Carriers';
import Offers from '../pages/Offers';
import Bids from '../pages/Bids';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shippers" component={ Shippers } />
      <Route exact path="/carriers" component={ Carriers } />
      <Route exact path="/offers" component={ Offers } />
      <Route exact path="/bids" component={ Bids } />
      <Route component={ NotFound } />
    </Switch>
  );
}
