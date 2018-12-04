import expenseTotalSelector from "../../selectors/expensesTotal";
import expenses from "../fixtures/Expenses";

test('should return 0 if no expenses is given', () => {
  const expense = expenseTotalSelector([]);
  expect(expense).toBe(0);
})

test('should correctly add up a single expense', () => {
  const expense = expenseTotalSelector([expenses[0]]);
  expect(expense).toBe(190);
})

test('should correctly add multiple expense', () => {
  const expense = expenseTotalSelector(expenses);
  expect(expense).toBe(13990);
})