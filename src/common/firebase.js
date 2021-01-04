import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCVm0zRHpIZjbryXBw6r7pgXpJ22M9ZvKc',
  authDomain: 'vue-hotel-53dd5.firebaseapp.com',
  databaseURL: 'https://vue-hotel-53dd5.firebaseio.com',
  projectId: 'vue-hotel-53dd5',
  storageBucket: 'vue-hotel-53dd5.appspot.com',
  messagingSenderId: '576369092726',
  appId: '1:576369092726:web:c1884153434735ec9d5757',
  measurementId: 'G-YQQVJN02JS'
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
