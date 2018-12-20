import authReducer from '../../reducers/Auth'

test('should empty uid on logout', () => {
  const action = {
    type: 'LOGOUT',
  }
  //ensure the present uid state is remove and returns {}
  const state = authReducer({ uid: 'hdhdhsiz' }, action);
  expect(state.uid).toBe('');
})

test('should set a uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'uacd6476872d',
  }
  //ensure the uid is set and returned
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid)
})