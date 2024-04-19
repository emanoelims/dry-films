// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDmt5DjI_i1l9Shs-GZnHTNfsYpNsHf7A",
  authDomain: "dry-filmes.firebaseapp.com",
  projectId: "dry-filmes",
  storageBucket: "dry-filmes.appspot.com",
  messagingSenderId: "523019413610",
  appId: "1:523019413610:web:cf3f5605bd3383f1c70213",
  measurementId: "G-Y76FHJXWY8"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
