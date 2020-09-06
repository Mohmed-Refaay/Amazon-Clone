import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfszAWLlhSiLSf_kzHrbEE0EXxBEgEbkY",
  authDomain: "clone-35789.firebaseapp.com",
  databaseURL: "https://clone-35789.firebaseio.com",
  projectId: "clone-35789",
  storageBucket: "clone-35789.appspot.com",
  messagingSenderId: "26849121658",
  appId: "1:26849121658:web:f4ebcac39cfc0c447732c3",
  measurementId: "G-0VZWMYWT2Q",
});


const auth = firebase.auth();

export { auth }