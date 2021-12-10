

import React, {useState} from 'react'

const MyForm2 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [color1, setColor1] = useState("red")

    function handleSubmit(e){

        e.preventDefault()
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(name.length < 4){

            setError("Error: Name should be atleast 4 char")
            setColor1("red")
        } else if ( !email.match(mailformat)){
            setError("Error: Invalid Email format")
            setColor1("red")
        } else{
            setError("Success")
            setColor1("green")
        }

    }
    return (
        <div>

                <form onSubmit={handleSubmit} style={{ marginLeft:'30%', marginTop:'100px'  }}>

                        <input style={{width:'60%', padding:10}} placeholder="Enter Name" name="name" value={name} onChange={(e)=>{ setName(e.target.value) }  }/>

                        <input style={{width:'60%', padding:10, marginTop:10}} placeholder="Enter Email" name="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}  } />

                        <input style={{width:'60%', padding:10, marginTop:10}} type="submit" value="Send"/>


                        <p>Name: {name}</p>

                        <p>Email: {email}</p>

                        <p style={{color:color1  }}> {error}</p>

                </form>
            
        </div>
    )
}

export default MyForm2
