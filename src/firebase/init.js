import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here

const config = {
  apiKey: 'AIzaSyCMSV4t2tDq5hfItCoDzxlfQ6209VYzpwU',
  authDomain: 'cowry-capital.firebaseapp.com',
  databaseURL: 'https://cowry-capital.firebaseio.com',
  projectId: 'cowry-capital',
  storageBucket: 'cowry-capital.appspot.com',
  messagingSenderId: '1029141232450',
  appId: '1:1029141232450:web:424b195b400f78b9e5e6db'
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
