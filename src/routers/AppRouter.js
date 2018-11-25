import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NoMatch from '../components/NotFoundPage';
import Header from '../components/Header';

export default () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={ExpenseDashboard} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route component={NoMatch} />
  </Switch>
  </BrowserRouter>
);