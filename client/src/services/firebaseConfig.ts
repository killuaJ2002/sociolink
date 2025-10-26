// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnq8NpFB2vAvUFjaU02pynQoG3UnNpqgw",
  authDomain: "sociolink-82104.firebaseapp.com",
  projectId: "sociolink-82104",
  storageBucket: "sociolink-82104.firebasestorage.app",
  messagingSenderId: "852864628312",
  appId: "1:852864628312:web:106e152eb2e91026ae3c2d",
  measurementId: "G-WQK66WGMM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);