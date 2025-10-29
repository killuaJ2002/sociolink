import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import {auth} from './firebaseConfig.ts';

export const signup = async(email: string, password: string)=>{
    return await createUserWithEmailAndPassword(auth,email, password);
}

export const login = async(email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const observeAuthState = (callback: (user: User | null)=> void)=>{
    return onAuthStateChanged(auth, callback);
}
