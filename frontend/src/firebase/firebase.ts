// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

// Define the configuration object with the correct type for Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Wtl8aa-y-qVTCeOhsktQ8OP-UBrHALo",
  authDomain: "mental-help-app.firebaseapp.com",
  projectId: "mental-help-app",
  storageBucket: "mental-help-app.firebasestorage.app",
  messagingSenderId: "298226457895",
  appId: "1:298226457895:web:974282f0a974d237165d02",
  measurementId: "G-1QJX3EBWML"
};


// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const auth: Auth = getAuth(app);

// Export the initialized app, analytics, and auth instances
export { app, analytics, auth };
