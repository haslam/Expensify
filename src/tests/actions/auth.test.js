import { authLogin, authLogout } from '../../actions/auth'


test('should perform authLogout', () => {
  const action = authLogout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})

test('should perform authLogin', () => {
  const uid = '123xyz';
  const action = authLogin(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

