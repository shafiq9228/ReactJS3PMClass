import logo from './logo.svg';
import './App.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

import { db } from './FirebaseAll/fire1';
import MyTable from './Components/MyTable';
import UploadFile from './Components/UploadFile';
import FetchWeather from './Components/FetchWeather';

function App() {

  async function SendData() {
    const mydoc = await setDoc(doc(db, "cities", "Secunderabad"), {
      population: 11111,
      cm: "KCR",
      state: "Telangana"
    });

    console.log("Id written is: Succesfull")


  }

  async function AddData() {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    });

    console.log("Document written with ID: ", docRef.id);
  }
  return (
    <>

      <FetchWeather />

    </>
  );
}

export default App;
