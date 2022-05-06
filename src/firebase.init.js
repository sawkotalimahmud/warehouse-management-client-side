// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPXQ0luRixRaK4kErZN7LV6K92J0lAXM",
  authDomain: "assignment-11-9e639.firebaseapp.com",
  projectId: "assignment-11-9e639",
  storageBucket: "assignment-11-9e639.appspot.com",
  messagingSenderId: "545906026639",
  appId: "1:545906026639:web:ab8f5587f4c355baad28fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;