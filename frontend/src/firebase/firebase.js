// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCOmBZW77o6hWAmAGVq7rP4q36EXnl-0-s",
  authDomain: "mentalhelp-aaa0c.firebaseapp.com",
  projectId: "mentalhelp-aaa0c",
  storageBucket: "mentalhelp-aaa0c.firebasestorage.app",
  messagingSenderId: "435247098697",
  appId: "1:435247098697:web:907bd12e00e5418f530898",
  measurementId: "G-Q3JJ8DZXXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)


export { app, analytics, auth } ;