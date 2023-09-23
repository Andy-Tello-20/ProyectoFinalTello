// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0g0Pjek3zKsx_IYytdyKQWWrTQRK7szA",
  authDomain: "aversiahorra-dbc38.firebaseapp.com",
  projectId: "aversiahorra-dbc38",
  storageBucket: "aversiahorra-dbc38.appspot.com",
  messagingSenderId: "796838676339",
  appId: "1:796838676339:web:cc88f239b19ec5fc4de706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);