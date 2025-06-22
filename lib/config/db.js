// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD79NhIqSrvFQyX-Ea9UEvGdZuhVGEZc9I",
  authDomain: "stockmaster-83b41.firebaseapp.com",
  projectId: "stockmaster-83b41",
  storageBucket: "stockmaster-83b41.firebasestorage.app",
  messagingSenderId: "166681941337",
  appId: "1:166681941337:web:7527b01fe5194fdd882848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export  { auth , provider }