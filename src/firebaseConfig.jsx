// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlcpYLN25NcYBWIPqzw-T1CLxQ0WTFM7Y",
  authDomain: "website-job-posting.firebaseapp.com",
  projectId: "website-job-posting",
  storageBucket: "website-job-posting.appspot.com",
  messagingSenderId: "1078484838127",
  appId: "1:1078484838127:web:07a72f0cb8992234fadd1a",
  measurementId: "G-46266DZCXP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);