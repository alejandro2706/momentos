import firebase from 'firebase/app'
import 'firebase/firestore'

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyBNIhgEg-FYbh0sWWuz-cBgOpyD5rkT8xQ',
  authDomain: 'momentos-30bd0.firebaseapp.com',
  databaseURL: 'https://momentos-30bd0.firebaseio.com',
  projectId: 'momentos-30bd0',
  storageBucket: 'momentos-30bd0.appspot.com',
  messagingSenderId: '966805650666',
  appId: '1:966805650666:web:50fe2462521ed7fd1e2b93',
  measurementId: 'G-7H4QYFYTR4',
})

export const db = app.firestore()
