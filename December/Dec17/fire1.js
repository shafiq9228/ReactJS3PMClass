// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2aUHRtQJLOEIrecaMeewgb7u8xX6ihXE",
  authDomain: "react2pmbatchnew.firebaseapp.com",
  projectId: "react2pmbatchnew",
  storageBucket: "react2pmbatchnew.appspot.com",
  messagingSenderId: "307788499780",
  appId: "1:307788499780:web:8a77c57361042f20072511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);