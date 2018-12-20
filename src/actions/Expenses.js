import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  //thunk- ing
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { 
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => {
        dispatch(addExpense({id: ref.key, ...expense}))
      })
  }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const adaRem = database.ref(`users/${uid}/expenses/${id}`);
    return adaRem.remove()
      .then(() => {
        dispatch(removeExpense({ id }))
      })
  }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const adaUpdate = database.ref(`users/${uid}/expenses/${id}`);
    return adaUpdate.update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
  }
}

//SET_EXPENSES -- set expenses to redux store
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

//async fetch of data and add to SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value')
      .then((snapshot) => {
        let expenses = [];
        snapshot.forEach(snaps => {
          expenses.push({
            id: snaps.key,
            ...snaps.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}