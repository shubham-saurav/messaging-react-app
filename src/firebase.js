import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVkFPKrhRfJQdxM-u23z9z7ldXSOELC20",
  authDomain: "messenger-clone-dfcdb.firebaseapp.com",
  databaseURL: "https://messenger-clone-dfcdb.firebaseio.com",
  projectId: "messenger-clone-dfcdb",
  storageBucket: "messenger-clone-dfcdb.appspot.com",
  messagingSenderId: "765011604485",
  appId: "1:765011604485:web:06052d8e0029e4f57b986c",
  measurementId: "G-48R12BMLDM",
});

const db = firebaseApp.firestore();

export default db;
