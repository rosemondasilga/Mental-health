// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

// Define the configuration object with the correct type for Firebase configuration
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
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const auth: Auth = getAuth(app);

// Export the initialized app, analytics, and auth instances
export { app, analytics, auth };
