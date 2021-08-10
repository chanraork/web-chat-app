import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMyg7NZ-nGxAPw7yT2sgY7rhgkyoC9YTs",
  authDomain: "romdul-chat-dev-10f07.firebaseapp.com",
  projectId: "romdul-chat-dev-10f07",
  storageBucket: "romdul-chat-dev-10f07.appspot.com",
  messagingSenderId: "952439768832",
  appId: "1:952439768832:web:34564db2c2992d63b995e5",
  measurementId: "G-WDD06MJDYY"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };