import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAmokYgLKaQ1X9tKLA6WTvO5MhBSelsNlA",
  authDomain: "twitter-clone-44f1b.firebaseapp.com",
  databaseURL: "https://twitter-clone-44f1b-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-44f1b",
  storageBucket: "twitter-clone-44f1b.appspot.com",
  messagingSenderId: "465435312427",
  appId: "1:465435312427:web:5e6e8e8f6911b3b47a456e",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const database = firebase.database();
const auth = firebaseApp.auth();
export { auth, database };
export default db;
