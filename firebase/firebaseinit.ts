// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNb40m6oq8HI-bD-ASKFVRWKKxfPIPOg4",
  authDomain: "voicetext-b9328.firebaseapp.com",
  projectId: "voicetext-b9328",
  storageBucket: "voicetext-b9328.appspot.com",
  messagingSenderId: "11084042616",
  appId: "1:11084042616:web:255fc6b5af8b777e7d788d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
