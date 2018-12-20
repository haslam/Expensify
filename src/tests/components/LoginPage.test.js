import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage beginLogin={() => {}} />);
  expect(wrapper).toMatchSnapshot();
})

test('should call beginLogin on button click', () => {
  //set a spy
  const beginLogin = jest.fn();
  //set a wrapper
  const wrapper = shallow(<LoginPage beginLogin={beginLogin} />);

  //simulate a click
  wrapper.find('button').simulate('click');

  //expect spy func to have been called
  expect(beginLogin).toHaveBeenCalled();
})