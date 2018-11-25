import moment from "moment";
import filtersReducer from "../../reducers/Filters";


test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(result.sortBy).toBe('date');
})

test('should set text filter', () => {
  const text = "Text test";
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const result = filtersReducer(undefined, action);
  expect(result.text).toBe(text);
})

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const result = filtersReducer(undefined, action);
  expect(result.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const result = filtersReducer(undefined, action);
  expect(result.endDate).toEqual(endDate)
})