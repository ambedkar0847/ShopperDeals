// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyC6kF7VxlFvpRp8Ysqt3Q35GxPNQwdv6DE",
  authDomain: "lab6-265aa.firebaseapp.com",
  projectId: "lab6-265aa",
  storageBucket: "lab6-265aa.appspot.com",
  messagingSenderId: "465016983118",
  appId: "1:465016983118:web:4eb850637132714fa5bd1f"
};

// Initialize Firebase
const app = initializeApp(firebase);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app