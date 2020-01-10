import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Category from "../components/CategoryList";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from './../components/Home';

import Login from './../components/Login';

const AppRouter = () => {
    return (
    <Router>
        <div>
          <Switch>
            <PublicRoute path = '/' component = {Login} exact/>
            <PrivateRoute path = '/Home' component = {Home}/>
            <PrivateRoute path = '/category' component = {Category}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
