import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyClfUcz7ss0twKQVb-OuqWQ2M9OHwq96sU",
    authDomain: "instagram-clone-20046.firebaseapp.com",
    projectId: "instagram-clone-20046",
    storageBucket: "instagram-clone-20046.appspot.com",
    messagingSenderId: "1051440380993",
    appId: "1:1051440380993:web:6815db020b3e61e4c65ac0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)

onAuthStateChanged(auth, async user => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid))
        let data = {
            uid: user.uid,
            fullName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }
        userHandle(data)
    } else {
        userHandle(false)
    }

})

export const login = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const register = async ({ email, password, full_name, username }) => {
    try {
        const user = await getDoc(doc(db, "usernames", username))

        if (user.exists()) {
            toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor`)
        } else {

            const response = await createUserWithEmailAndPassword(auth, email, password)

            if (response.user) {
                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid
                })

                await setDoc(doc(db, "users", response.user.uid), {
                    full_name,
                    username,
                    followers: [],
                })
                await updateProfile(auth.currentUser, {
                    displayName: full_name,
                })

                return response.user
            }
        }

    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}