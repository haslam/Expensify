import React from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/Expenses';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onSubmit (expense) {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    console.log('Updated', expense) 
  }
  onRemove () {
    this.props.startRemoveExpense({ id: this.props.expense.id} );
    console.log('Removed', this.props.expense.id);
    this.props.history.push('/');
  }
  render() {
  console.log('edit props ', this.props);
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit Expense</h1>
            <p>Easily make changes to the selected expense.</p> 
          </div>
        </div>
        <div className="content-container">
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div> 
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => {
  const match = matchPath(props.location.pathname, {
    path: '/edit/:id',
    exact: true,
    strict: false
  })
  return expense.id === match.params.id
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

