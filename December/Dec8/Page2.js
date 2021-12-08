

import React, { useEffect, useState } from 'react'

const Page2 = () => {



    const [num, setNum] = useState(0)

    const [age, setAge] = useState(0)

    
        
    useEffect(()=>{
        alert('Iam from Page2')
    }, [age])

    return (
        <div style={{height:'100vh', backgroundColor:'orange'}}>.
        
        <p style={{textAlign:'center',marginTop:'20px'}}>Page 2</p>

        <p>Num is : {num}</p>

        <button onClick={ ()=>{ setNum(num+1)  } }>Modify Num</button>

        <p>Age is : {age}</p>

        <button onClick={ ()=>{ setAge(age+1)  } }>Modify Age</button>

        </div>
    )
}

export default Page2
