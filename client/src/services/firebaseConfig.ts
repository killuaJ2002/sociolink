import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBnq8NpFB2vAvUFjaU02pynQoG3UnNpqgw",
  authDomain: "sociolink-82104.firebaseapp.com",
  projectId: "sociolink-82104",
  storageBucket: "sociolink-82104.firebasestorage.app",
  messagingSenderId: "852864628312",
  appId: "1:852864628312:web:106e152eb2e91026ae3c2d",
  measurementId: "G-WQK66WGMM7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
