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

  const [b1, setB1] = useState(false)

  function Name(x1){

    return !x1
  }

  function temp(){

    setB1( x1=>!x1  )

    console.log(b1)
  }

  function xyz(name){

    console.log("my name is: "+name)
  }

  return (
    <>

        <button onClick={ ()=>{ setB1(x1 => !x1) } } >Toggle</button>

      { b1 ? <Home/> : <Settings/>  }

    </> 

  )
}

export default App


