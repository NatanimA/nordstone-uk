// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA-whmvBAPUbtGa_NREw5lyuaJwmShNWY",
  authDomain: "nordstone-e873b.firebaseapp.com",
  projectId: "nordstone-e873b",
  storageBucket: "nordstone-e873b.appspot.com",
  messagingSenderId: "26400236585",
  appId: "1:26400236585:web:850ce2b3c3def477886838",
  measurementId: "G-W3EZSL90WT",
  databaseURL: "https://nordstone-e873b-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const storage = getStorage()
export const database = getDatabase(app);



