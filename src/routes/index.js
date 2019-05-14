import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from './history';

import Search from '../components/Search';
import Data from '../components/Data';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/data" exact component={Data} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
