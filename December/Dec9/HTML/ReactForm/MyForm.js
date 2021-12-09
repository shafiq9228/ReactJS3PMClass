

import React, { useState } from 'react'

const MyForm = () => {



    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: ''
    })

    function handleSubmit(e) {
        e.preventDefault()


        console.log(formData)

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       
        if(formData.name.length < 4){
            //alert("Enter atleast 4 chars name")

            setError("Enter atleast 4 chars name")
        } 

        else if(!formData.email.match(mailformat)){

            //alert("Invalid email")
            setError("Invalid email")

        }

        else if(formData.mobile.length !== 10){
               // alert("Enter 10 digit mobile only")

                setError("Enter 10 digit mobile only")
        }
        
        else{
            //alert(formData.name+":: "+formData.email+"::"+formData.mobile)

            setError("")

            alert("Success")
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

    function TestData() {
        console.log(formData)
    }
    return (
        <div>

        <p style={{color:'red'}}> {error} </p>

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
