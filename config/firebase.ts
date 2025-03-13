import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_e07B2a7OCAhO21t9fj8-WQmzW10hmyI",
    authDomain: "dzqeue.firebaseapp.com",
    projectId: "dzqeue",
    storageBucket: "dzqeue.firebasestorage.app",
    messagingSenderId: "938663050314",
    appId: "1:938663050314:web:bc6b584431a756b81bbab3",
    measurementId: "G-LYBM6RZSXD"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
