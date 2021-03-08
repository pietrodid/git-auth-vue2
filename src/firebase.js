import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAewp1dOkkYLEaVudx85gg-yhu_7k5iN4k",
    authDomain: "crud-vue2-16573.firebaseapp.com",
    projectId: "crud-vue2-16573",
    storageBucket: "crud-vue2-16573.appspot.com",
    messagingSenderId: "950116905906",
    appId: "1:950116905906:web:e432078e21cefc555baaab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db, auth}