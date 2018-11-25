import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/Expenses";

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onSubmit (expense) {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    console.log('Updated', expense) 
  }
  onRemove () {
    this.props.removeExpense({ id: this.props.expense.id} );
    console.log('Removed', this.props.expense.id);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => { dispatch(editExpense(id, expense)) },
  removeExpense: (data) => { dispatch(removeExpense(data)) }
})

const mapsStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapsStateToProps, mapDispatchToProps)(EditExpensePage)

