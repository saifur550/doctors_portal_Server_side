// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthk2PzH-oMxb2UZ4P6f-A9RMUU-qkm80",
  authDomain: "doctor-portal-auth00.firebaseapp.com",
  projectId: "doctor-portal-auth00",
  storageBucket: "doctor-portal-auth00.appspot.com",
  messagingSenderId: "644532760124",
  appId: "1:644532760124:web:4e95ae282a0e97090f1d39",
  measurementId: "G-3FFBXP1PDX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
