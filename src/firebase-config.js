// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDM1-3TkHZw_Cu8p1n18IriGGgiooJHoSE",
    authDomain: "react-57df0.firebaseapp.com",
    projectId: "react-57df0",
    storageBucket: "react-57df0.appspot.com",
    messagingSenderId: "481043678470",
    appId: "1:481043678470:web:cb72cd2fdd53a3d6e2ca87",
    measurementId: "G-HEWL41K8WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);