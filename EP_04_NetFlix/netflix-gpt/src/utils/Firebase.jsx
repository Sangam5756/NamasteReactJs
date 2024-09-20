// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD2zbn7hrIBw4a8MaCVqgEs035gDtPsJ0",
  authDomain: "netflixgpt-174a5.firebaseapp.com",
  projectId: "netflixgpt-174a5",
  storageBucket: "netflixgpt-174a5.appspot.com",
  messagingSenderId: "596669302251",
  appId: "1:596669302251:web:e0a4ab7fe39c531b0545ae",
  measurementId: "G-D314FS9HGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);