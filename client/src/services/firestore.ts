import {db} from './firebaseConfig.ts';
import {doc, getDoc, setDoc} from 'firebase/firestore';

export const createUserProfile = async(uid: string, data: any)=> {
    await setDoc(doc(db, 'users', uid), data);
}

export const getUserProfile = async(uid: string) => {
    const snap = await getDoc(doc(db, 'users', uid));
    return snap.exists()? snap.data: null;
}