import {db} from './firebaseConfig.ts';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import {auth} from './firebaseConfig.ts';

export const createUserProfile = async(username: string, bio: string)=> {
    const user = auth.currentUser;
    if(!user) {
        console.log('no user signed in');
        return;
    }
    const ref = doc(db, 'profile', user.uid);
    await setDoc(ref, {
        username,
        bio,
        email: user.email,
        createdAt: new Date(),
    })
    console.log('created user profile with uid', user.uid);
}