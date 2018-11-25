import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


beforeEach (() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
})

test('should render ExpenseListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

//we use enzyme setProps to update the filter props to altFilter
test('should render ExpenseListFilter with altFilter correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
  const value = 'gas';
  //simulate a click and set target's value to 'gas'
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
  const value = "date";
  //update filter to have some values
  wrapper.setProps({
    filters: altFilters
  });
  //simulate change on select
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  //expect sortByDate props to have been called. 
  expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
  const value = "amount";
  //update filter to have some values
  wrapper.setProps({
    filters: altFilters
  });
  //simulate change on select
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  //expect sortByDate props to have been called. 
  expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus changes', () => {
  const calenderFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
  expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
})