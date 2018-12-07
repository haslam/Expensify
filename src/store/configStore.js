import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/Expenses";
import filterReducer from "../reducers/Filters";
import thunk from "redux-thunk";

//attach dev compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}