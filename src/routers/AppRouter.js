import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NoMatch from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
  <Switch>
  <PublicRoute path="/" exact component={LoginPage} />
  <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
  <PrivateRoute path="/create" component={AddExpensePage} />
  <PrivateRoute path="/edit/:id" component={EditExpensePage} />
  <Route component={NoMatch} />
  </Switch>
  </Router>
);

export default AppRouter;
