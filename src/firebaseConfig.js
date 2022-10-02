// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8AaS-UJ6bkj_ZNvFRQ6RjIX7N3kpVe_4",
  authDomain: "maged-faiz.firebaseapp.com",
  projectId: "maged-faiz",
  storageBucket: "maged-faiz.appspot.com",
  messagingSenderId: "923958312719",
  appId: "1:923958312719:web:26a92bd04936c42601087a",
  measurementId: "G-Y5H429SQM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
