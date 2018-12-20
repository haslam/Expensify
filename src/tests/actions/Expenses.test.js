import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { 
  startAddExpense, 
  startSetExpenses, 
  addExpense, 
  removeExpense, 
  editExpense, 
  setExpenses,
  startRemoveExpense,
  startEditExpense,
 } 
  from "../../actions/Expenses";
import expenses from "../fixtures/Expenses";
import database from "../../firebase/firebase";

const createMockStore = configureStore([thunk]);
const uid = 'myTestUidHere';
const defaultAuthState = { auth: { uid }};

//write some data to db before each test
beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, ...expense }) => {
    //use id as the node key for other expenses
    expensesData[id] = expense;
  })
  //calling done() ensure this db line is completed before moving on to the next test
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expense', (done) => {
  //pass ina default auth uid to mockStore. 
  // - allows startRemoveExpense access to a required uid
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      //should be null || false 
      expect(snapshot.val()).toBeFalsy();
      done();
   })
  
})

test('should setup edit expense action', () => {
  const action = editExpense('123abc', { note:'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  }); 
})

test('should edit expense from db', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    description: 'Updated string',
    note: 'some test note',
    amount: 1995,
    createdAt: 6755552
  };
  store.dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      })
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
        expect(snapshot.val().createdAt).toBe(updates.createdAt);
        done();
    })
})

//pass done as argument to tell jest to run asychronously
test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const { id, ...expenseData } = expenses[1];
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })
})

test('should add expense with default to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = { 
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0 
  }
  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
 
  store.dispatch(startSetExpenses())
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done();
  })
})


// test('should setup add expense with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })