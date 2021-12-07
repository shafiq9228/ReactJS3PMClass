

import React from 'react'
import { useState } from 'react'

const Blog = () => {

    const [emp, setEmp]= useState( {
        name:'Shafiq',
        email: 'shafiq@gmail.com',
        rank: 20
    } )

    function Modify(){

        setEmp({...emp, name:'patel', rank:78})

       /*
        setEmp({name:'Shafiq',
        email: 'shafiq@gmail.com',
        rank: 20, 
        name:'patel'})  */
    }

    return (
        <div style={ {backgroundColor:'red', height:'200px'} }>

            <p style={{textAlign:'center'}}>I am blog</p>

            <button onClick={Modify}>Change</button>

            <p style={{color:'white'}}>Emp data is  : {emp.name}</p>

            <p style={{color:'white'}}>Emp Rank is  : {emp.rank}</p>


            
        </div>
    )
}

export default Blog
