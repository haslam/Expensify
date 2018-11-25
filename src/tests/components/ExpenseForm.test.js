import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/Expenses";

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
}) 

test('should render error for invalid form submisson', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  //if form is submited with error, state errorField should contain a string value
  expect(wrapper.state('errorField').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
  
})

test('should set description on input change', () => {
  const value = "New description";
  //GOAL: 1. render ExpenseForm 
        //2. change the input
        //3. Make an insertion checking that the description state was set
  const wrapper = shallow(<ExpenseForm />);
  //Access the first element [index] in the form - description
  //Pass an object as the expected 'e' argument, setting target value as expected.
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
  const value = "New note here";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
  const value = '23.520';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
})

//jest spy - jest.fn()
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const { id, ...expense } = expenses[1];
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('errorField')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expense)
})

test('should set new date onDateChange', () => {
  //goal is to pass a new moment date to onDateChange createdAt through the SingleDatePicker
  const now = moment();
  const wrapper = shallow(<ExpenseForm />)
  //find SingleDatePicker
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus onChange', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
})