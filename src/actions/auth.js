import { firebase, googleAuthProvider } from '../firebase/firebase';

export function beginLogin () {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export function beginLogout () {
  return () => {
    return firebase.auth().signOut();
  }
}

export function authLogin (uid, email) {
  return {
    type: 'LOGIN',
    uid,
    email
  }
}

export function authLogout () {
  return {
    type: 'LOGOUT'
  }
}