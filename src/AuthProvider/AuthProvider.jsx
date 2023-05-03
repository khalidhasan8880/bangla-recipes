import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {
    // hooks
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    // functions
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const continueWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const updateInformation = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            console.log( 'Profile updated!');
            
          }).catch((error) => {
            console.log('profile update failed');
            // ...
          });
    }
    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        createUser,
        logIn,
        logOut,
        continueWithGoogle,
        updateInformation, 
        user,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;