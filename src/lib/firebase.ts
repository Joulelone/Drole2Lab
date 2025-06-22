// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoL6cO1JHhxbur9sKnRfeUnTO41ykJv5U",
  authDomain: "drole2lab.firebaseapp.com",
  projectId: "drole2lab",
  storageBucket: "drole2lab.firebasestorage.app",
  messagingSenderId: "911478816676",
  appId: "1:911478816676:web:5b0546206ca4a33c5c4b31",
  measurementId: "G-KHY2YCLGML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);