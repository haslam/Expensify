import React from 'react'
import { shallow } from 'enzyme'
import { Navigation } from '../../components/Navigation';
import hashEmail from '../../helper/hashing';

describe('Side navigation ', () => {
  let wrapper, logout;
  const email = 'test@example.com';

  it('should render correctly', () => {
    wrapper = shallow(<Navigation email={email} beginLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call beginLogout when button is clicked', () => {
    logout = jest.fn();
    wrapper = shallow(<Navigation email={email} beginLogout={logout} />);
    wrapper.find('.button__logout--left').simulate('click');
    expect(logout).toHaveBeenCalled();
  })
})