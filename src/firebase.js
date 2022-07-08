import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI57rYUXOwzvi7jsvX7IEELcVPMfsZivE",
  authDomain: "admin-test-7899a.firebaseapp.com",
  projectId: "admin-test-7899a",
  storageBucket: "admin-test-7899a.appspot.com",
  messagingSenderId: "18650661642",
  appId: "1:18650661642:web:63a3989b66235cbe32b0f3",
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
