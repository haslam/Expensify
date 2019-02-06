const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        uid: action.uid,
        email: action.email,
        displayName: action.displayName,
      }
    case 'LOGOUT':
      return {
        uid: '',
        email: '',
        displayName: '',
      }
    default:
      return state;
  }
}

export default authReducer