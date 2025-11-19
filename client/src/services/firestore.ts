import {db} from './firebaseConfig.ts';
import { doc, setDoc, getDoc, writeBatch } from "firebase/firestore";
import {auth} from './firebaseConfig.ts';

export const createUserProfile = async(username: string, bio: string): Promise<{
    success: boolean, reason?:string
}>=> {
    const user = auth.currentUser;
    if(!user) {
        console.log('no user signed in');
        return {success: false, reason: 'user_notfound'};
    }
    const snap = await getDoc(doc(db, "profile", user.uid));
    if(snap.exists()) {
        console.log('user profile already exists');
        return {success:false, reason: 'already_exists'};
    }
    const ref = doc(db, 'profile', user.uid);
    await setDoc(ref, {
        username,
        bio,
        email: user.email,
        createdAt: new Date(),
    })
    console.log('created user profile with uid', user.uid);
    return {success: true};
}

type UserProfile = {
    username: string;
    bio: string;
    email: string;
    createdAt: Date;
}

export const getUserProfile = async (id: string): Promise<UserProfile | null>=> {
  const snap = await getDoc(doc(db, "profile", id));
  return snap.exists() ? snap.data() as UserProfile : null;
};

type linkItem = {
    url: string;
    platform: string;
}

export const createLinks = async(uid: string, links: linkItem[]): Promise<{success: boolean, reason?: string}>=> {
    try {
        const batch = writeBatch(db);
        links.forEach((link)=> {
            const ref = doc(db, 'link', crypto.randomUUID());
            batch.set(ref, {
                uid,
                url: link.url,
                platform: link.platform
            })
        })

        await batch.commit();
        return {success: true};
    } catch (error: any) {
        console.log("error creating links", error);
        return {success: false, reason: error.message};
    }
}