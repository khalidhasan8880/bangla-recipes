// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz2BbU33rEjsWedadrZnrjdaJ1WTkk5_0",
  authDomain: "bangla-recipes-d82f8.firebaseapp.com",
  projectId: "bangla-recipes-d82f8",
  storageBucket: "bangla-recipes-d82f8.appspot.com",
  messagingSenderId: "376686580084",
  appId: "1:376686580084:web:6e90b8d9ffc07b4cfedc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app