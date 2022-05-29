import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSIlBjZgGq6bN66xk0GQMzo4GYCmwCTww",
  authDomain: "blogproject-5bc92.firebaseapp.com",
  projectId: "blogproject-5bc92",
  storageBucket: "blogproject-5bc92.appspot.com",
  messagingSenderId: "539716767864",
  appId: "1:539716767864:web:bd169c0bae1802a0aa1d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();