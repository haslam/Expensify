const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        uid: action.uid,
        email: action.email,
      }
    case 'LOGOUT':
      return {
        uid: '',
        email: '',
      }
    default:
      return state;
  }
}

export default authReducer