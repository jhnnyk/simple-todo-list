// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKii3h45RguOzYyR1jlnu0rsDMuSEFUE4',
  authDomain: 'simple-todos-b00c9.firebaseapp.com',
  projectId: 'simple-todos-b00c9',
  storageBucket: 'simple-todos-b00c9.appspot.com',
  messagingSenderId: '166327566828',
  appId: '1:166327566828:web:d007703998dac2df2240c9'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
// here we can export reusable database references
export const todosRef = collection(db, 'todos')
