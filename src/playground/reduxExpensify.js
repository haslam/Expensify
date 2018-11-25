import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Action generators

//ADD_EXPENSE

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
})

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
})
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return expense
        }
      });
    default: 
      return state
  }
}

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE': 
      return {
        ...state,
        startDate: action.setStartDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.setEndDate
      }
    default: 
      return state
  }
}

// Timestamp - starts January 1st 1970 (unix epoch). it increases or decreases in milliseconds.

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
  console.log(visibleExpenses)
})


//Dispatch

const { expense } = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Sail', amount: 50}));

const removeOne = store.dispatch(removeExpense({id: expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter('en'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate());
store.dispatch(setTextFilter('en'));
// console.log(expense);
// console.log(removeOne);


const demoState = {
  expenses: [{
    id: 'poisignor',
    description: 'January Sail',
    note: 'This was the last payment for sails',
    amount: 63600,
    createdAt: 0,
  }],
  filters: {
    text: 'sail',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
}
//object spread used with babel-plugin-transform-object-rest-spread
console.log({...demoState.filters, locale: 'French', text: 'camp'})