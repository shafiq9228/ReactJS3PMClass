

import React, { useState } from 'react'

import { db } from '../FirebaseWeb/fire'
import { collection, addDoc } from "firebase/firestore"; 

const MyForm = () => {



    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: '',
        error1:''
    })

    function handleSubmit(e) {
        e.preventDefault()


        console.log(formData)

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       
        if(formData.name.length < 4){
            //alert("Enter atleast 4 chars name")

           // setError("Enter atleast 4 chars name")

           setFormData({...formData, error1: "Enter atleast 4 chars name"})
        } 

        else if(!formData.email.match(mailformat)){

            //alert("Invalid email")
            //setError("Invalid email")

            setFormData({...formData, error1: "Invalid email"})

        }

        else if(formData.mobile.length !== 10){
               // alert("Enter 10 digit mobile only")

               //setError("Enter 10 digit mobile only")
                setFormData({...formData, error1: "Enter 10 digit mobile only"})
        }
        
        else{
            //alert(formData.name+":: "+formData.email+"::"+formData.mobile)

           // setError("")
            setFormData({...formData, error1: ""})

           

            Sub(formData.name, formData.email, formData.mobile)

             alert("Success")

             setFormData({
                name: "",
                email: "",
                mobile: '',
                error1:''
            })
            


        }

    }

    async function Sub(nameValue, emailValue, mobileValue){

        try{

            const docRef = await addDoc(collection(db, "users2"), {
                name: nameValue,
                email: emailValue,
                mobile: mobileValue
              });

              console.log("Document written with ID: ", docRef.id);

        } catch(e){
            console.log("Error adding Document is : "+e)
        }

    }

    function handleChange(e) {
      
       // console.log(e.target.name)
        //console.log(e.target.value)

        let nm = e.target.name;

        setFormData({ ...formData, [nm]: e.target.value })

       
    }

    function handleChange1(e) {
        console.log(e.target.value)
        setFormData({ ...formData, name: e.target.value })
    }

    function handleChange2(e) {
        console.log(e.target.value)
        setFormData({ ...formData, email: e.target.value })
    }


    function handleChange3(e) {
        console.log(e.target.value)
        setFormData({ ...formData, mobile: e.target.value })
    }

    async function TestData() {
       
        try{

            const docRef = await addDoc(collection(db, "College"), {
                collegName: "OU",
                studentName: "Deepak",
                rank: 30
              });

              console.log("Document written with ID: ", docRef.id);

        } catch(e){
            console.log("Error adding Document is : "+e)
        }

    }
    return (
        <div>

        <p style={{color:'red'}}> {formData.error1} </p>

            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Name" name="name" style={{ padding: 10, width: '50%', marginTop: 20 }} value={formData.name} onChange={handleChange} />

                <input placeholder="Enter Email" name="email" style={{ padding: 10, width: '50%', marginTop: 20 }} value={formData.email} onChange={handleChange} />

                <input placeholder="Enter Mobile" name="mobile" style={{ padding: 10, width: '50%', marginTop: 20 }} value={formData.mobile} onChange={handleChange} />

                <br />

                <input type="submit" value="Submit" />
            </form>


            <button onClick={TestData}>TestData</button>

        </div>
    )
}

export default MyForm
