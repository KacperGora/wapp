// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzCn_DULUEH5WqDV9ooXPuxMLVqariGm4",
  authDomain: "whatsapp-react-f1a98.firebaseapp.com",
  projectId: "whatsapp-react-f1a98",
  storageBucket: "whatsapp-react-f1a98.appspot.com",
  messagingSenderId: "410074536217",
  appId: "1:410074536217:web:b326b1dffa0466219d8d88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
