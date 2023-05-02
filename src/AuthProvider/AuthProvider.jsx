import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({Children}) => {
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const continueWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const authInfo = {
        createUser,
        logIn,
        logOut,
        continueWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;