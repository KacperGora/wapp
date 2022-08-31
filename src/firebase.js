// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyCMtahzRr-w8ksOVvg2u80bTX6Odt2-CSo",
  authDomain: "test-4e075.firebaseapp.com",
  projectId: "test-4e075",
  storageBucket: "test-4e075.appspot.com",
  messagingSenderId: "1027677395749",
  appId: "1:1027677395749:web:34dc86317463808e7cd8cc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();


