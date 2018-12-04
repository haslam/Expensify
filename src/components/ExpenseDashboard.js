import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from "./ExpensesSummaries";
import AddExpense from './AddExpensePage'
import Header from './Header';

const ExpenseDashboardPage = () => (
  <div>
    <Header />
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage
