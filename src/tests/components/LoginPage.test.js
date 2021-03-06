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
  const githubLogin = jest.fn();
  const facebookLogin = jest.fn();
  //set a wrapper
  const wrapper = shallow(
      <LoginPage 
        beginLogin={beginLogin} 
        githubLogin={githubLogin} 
        facebookLogin={facebookLogin}  
        />
    );

  //simulate a click for each button
  wrapper.find('.button--google').simulate('click');
  //expect spy func to have been called
  expect(beginLogin).toHaveBeenCalled();

  wrapper.find('.button--github').simulate('click');
  expect(githubLogin).toHaveBeenCalled();

  wrapper.find('.button--facebook').simulate('click');
  expect(facebookLogin).toHaveBeenCalled();
})

