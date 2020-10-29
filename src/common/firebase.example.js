import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

if (window.location.hostname === 'localhost') {
  console.log('testing field start')
  firebase.firestore().settings({
    host: 'localhost:8080',
    ssl: false
  })
}

export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase
