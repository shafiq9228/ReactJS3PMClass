import Home from "./Nav/Home"
import Settings from "./Nav/Settings"

import { useState } from "react"


const Menu = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto', marginTop: '40px' }}>
      <button style={{ marginTop: '15px' }}>Home</button>
      <button style={{ marginTop: '15px' }}>Settings</button>
    </div>
  )
}

const App = () => {


  const [name, setName] = useState("NoName")

  const [num, setNum] = useState(0)

  function temp(){
    setName("shafiq")
  }

  const temp1 = ()=>{
    setNum( d1=>d1+1  )

    console.log(num)
  }

  
  return (
    <>

        <button onClick={ ()=> { setNum(f1=>f1+1) } }>Toggle</button>

        <p style={{textAlign:'center'}}> {num} </p>

    

    </> 

  )
}

export default App


/*


function temp(n1){
    
    return "patel "+n1
  }

  //arrow funtion shortcut
  const temp = n2 => "patel "+n1

  */