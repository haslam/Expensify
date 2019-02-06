import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";
import hashEmail from '../../helper/hashing';

const email = 'test@example.com';

// beforeEach(() => {
//   logout = jest.fn();
//   wrapper = shallow(<Header beginLogout={() => {}}/>);
// })
test('should render Header correctly', () => {
const wrapper = shallow(<Header email={email}beginLogout={() => {}}/>);

  //use enzymn-to-json library to enhance enzyme with snapshot utility
  expect(wrapper).toMatchSnapshot();
 // expect(wrapper.find('h1').text()).toBe('Expensify');

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})

test('should call beginLogout on button click', () => {
  const beginLogout = jest.fn(); //spy
  const wrapper = shallow(<Header email={email} beginLogout={beginLogout} />);
  wrapper.find('.button--trans').simulate('click');
  expect(beginLogout).toHaveBeenCalled()
})

