import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from "../actions/Expenses";

//always use an unconnected component for testing. Hence I'll add an export here
export class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit (expense) {
    //props.dispatch(addExpense(expense)) -- now, we can call onSubmit of mapped to props
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render()  {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Add Expense</h1>
            <p>Create a new expense to be added to your list of expenses</p>
          </div>
        </div>
        <div className="content-container">
        <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div> 
      </div>
    )
  }
}

//For a more testable component, let's use mapDispatchToProps of connect. works similar as mapStateToProps but for Dispatch

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

//set first argument [state] to undefined.
export default connect(undefined, mapDispatchToProps)(AddExpensePage)
