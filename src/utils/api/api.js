import firebase from 'firebase/compat'
import 'firebase/database'
import 'firebase/auth'

const login = ({email, password}) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      console.log('You successfully logged in!')
      return userCredentials.user.uid
    })
    .catch(error => console.log(error))
}

const getUserProfile = async userId => {
  return await firebase
    .database()
    .ref(`users/${userId}`)
    .once('value')
    .then(data => data.val())
    .catch((error) => console.log(error))
}

export {
  login,
  getUserProfile
}