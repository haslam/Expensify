import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configStore";
import { startSetExpenses } from "./actions/Expenses";
import { setTextFilter } from "./actions/Filters";
import getVisibleExpense from "./selectors/Expenses";
import "normalize-css";
import 'react-dates/lib/css/_datepicker.css';
import "./styles/style.scss";
import './firebase/firebase';


const store = configureStore();

//addExpense - water bill
// store.dispatch(addExpense({description: 'Water bill', amount: 4300 }));
// store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1300 }));
// //addExpense - gas bill
// store.dispatch(addExpense({ description: 'Gas bill', amount: 3200, createdAt: 1000 }));
//setTextFilter - bill (2 items) - water (1 item)
// store.dispatch(setTextFilter('water'));

//getVisibleExpense - print visible ones to screen
const state = store.getState();
const visibleState = getVisibleExpense(state.expenses, state.filters);

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 5000)
console.log(visibleState);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})


