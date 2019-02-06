import { firebase, googleAuthProvider } from '../firebase/firebase';


export function beginLogin () {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
      .catch(error => {
        alert(`Couldn't proceed with Google login. ${error} Thank you.`)
      })
  }
}
export function githubLogin () {
  const githubAuthProvider = new firebase.auth.GithubAuthProvider();
  return () => {  
    return firebase.auth().signInWithPopup(githubAuthProvider)
      .catch((error) => {
        alert(`Couldn't proceed with GitHub login. ${error} Thank you.`)
      })
  }
}
export function facebookLogin () {
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider)
      .catch(error => {
        alert(`Couldn't proceed with Facebook login. ${error} Thank you.`)
      })
  }
}
export function beginLogout () {
  return () => {
    return firebase.auth().signOut();
  }
}

export function authLogin (uid, email, displayName) {
  return {
    type: 'LOGIN',
    uid,
    email,
    displayName
  }
}

export function authLogout () {
  return {
    type: 'LOGOUT'
  }
}
