import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

/*
const config = {
  apiKey: 'AIzaSyCe6CSzOUs6_Ij_VHa6hancdEi6CNBtw7c',
  authDomain: 'bento-starter.firebaseapp.com',
  databaseURL: 'https://bento-starter.firebaseio.com',
  projectId: 'bento-starter',
  storageBucket: 'bento-starter.appspot.com',
}
*/

firebase.initializeApp(config)
// firebase.analytics()
