// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrWIYP7wj1uOQil15D8Lo1--DdPZwCbw",
  authDomain: "front-ii-integration.firebaseapp.com",
  projectId: "front-ii-integration",
  storageBucket: "front-ii-integration.firebasestorage.app",
  messagingSenderId: "498055229697",
  appId: "1:498055229697:web:e7bf1f46488605a766ab00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;