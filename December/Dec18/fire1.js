// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_rzmZv4KG8uhP9_PQVqpNq8D-AY9SLw",
  authDomain: "dec18test-e315c.firebaseapp.com",
  projectId: "dec18test-e315c",
  storageBucket: "dec18test-e315c.appspot.com",
  messagingSenderId: "716486563146",
  appId: "1:716486563146:web:52f9d2ceb0dd9e22669db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const mystorage = getStorage(app);


