// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLoIVpqi_k6goUv-c8PFCmczOmqfUicT4",
  authDomain: "react-todo-be2c0.firebaseapp.com",
  projectId: "react-todo-be2c0",
  storageBucket: "react-todo-be2c0.appspot.com",
  messagingSenderId: "1087780478671",
  appId: "1:1087780478671:web:39741b33140fee49a3e1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);