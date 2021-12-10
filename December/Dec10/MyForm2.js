

import React, {useState} from 'react'

const MyForm3 = () => {


    const [formData, setFormData] = useState({
        name: "",
        email:"",
        error1: "",
        color1: "red"
    })

    function handleSubmit(e){

        e.preventDefault()

      
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(formData.name.length < 4){

            //setError("Error: Name should be atleast 4 char")
            //setColor1("red")

            setFormData({...formData, error1: "Error: Name should be atleast 4 char", color1:'red'})
          

        } else if ( !formData.email.match(mailformat)){
           // setError("Error: Invalid Email format")
            //setColor1("red")
            setFormData({...formData, error1: "Error: Invalid Email format", color1:'red'})
           
        } else{
            //setError("Success")
           // setColor1("green")

           setFormData({...formData, error1: "Success", color1:'green'})
          
        }

    }


    return (
        <div>

                <form onSubmit={handleSubmit} style={{ marginLeft:'30%', marginTop:'100px'  }}>

                        <input style={{width:'60%', padding:10}} placeholder="Enter Name" name="name" value={formData.name} onChange={ (e)=>{ setFormData({...formData, name: e.target.value})   } }/>

                        <input style={{width:'60%', padding:10, marginTop:10}} placeholder="Enter Email" name="email" value={formData.email} onChange={(e)=>{ setFormData({...formData, email:e.target.value})  }} />

                        <input style={{width:'60%', padding:10, marginTop:10}} type="submit" value="Send"/>


                        <p>Name: {formData.name}</p>

                        <p>Email: {formData.email}</p>

                        <p style={{color:formData.color1  }}> {formData.error1}</p>

                </form>
            
        </div>
    )
}

export default MyForm3
