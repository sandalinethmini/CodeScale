// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-1V4JN5MB7wrfZMnWfXI59DrZt4KX2eE",
  authDomain: "sandali-a9977.firebaseapp.com",
  projectId: "sandali-a9977",
  storageBucket: "sandali-a9977.appspot.com",
  messagingSenderId: "513318086959",
  appId: "1:513318086959:web:7acfba1e1a649799fc19da",
  measurementId: "G-H8BV44DT4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
