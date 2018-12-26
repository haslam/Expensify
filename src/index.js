import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configStore";
import { startSetExpenses } from "./actions/Expenses";
import { authLogin, authLogout } from "./actions/auth";
import getVisibleExpense from "./selectors/Expenses";
import "normalize-css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import { firebase } from "./firebase/firebase";
import Loading from "./components/Loading";


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

console.log('state test is: ', state);
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 5000)
console.log(visibleState);

let hasRendered = false;

const renderInApp = () => {
  //Only render when hasRender is false
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<Loading />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {

  if (user) { 
    console.log(user);
    //user is authenticated
    //dispatch login with user uid
    store.dispatch(authLogin(user.uid, user.email));
    //user is authenticated, dispatch expenses and render
    store.dispatch(startSetExpenses()).then(() => {
      renderInApp();
      //ensure user is at home page before redirecting
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
  }
  else {
    //user is not authenticated, just render and redirect to home
    store.dispatch(authLogout());
    renderInApp();
    history.push('/') ;
  }
})

