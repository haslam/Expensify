import React from "react";
import { shallow } from "enzyme";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);

  //use enzymn-to-json library to enhance enzyme with snapshot utility
  expect(wrapper).toMatchSnapshot();
 // expect(wrapper.find('h1').text()).toBe('Expensify');

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})
