import Home from "./Nav/Home"
import Settings from "./Nav/Settings"

import { useState } from "react"

const Menu = (props) => {
  
  return (
    <>
      <div>
        <p style={{ textAlign: 'center' }}>App Page</p>

        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto', marginTop: '40px' }}>
          <button style={{ marginTop: '15px' }} onClick={ ()=>{props.fromMenu(1)} } >Home</button>
          <button style={{ marginTop: '15px' }} onClick={()=>{props.fromMenu(2)}}>Settings</button>
        </div>
      </div>
    </>
  )
}

const App = () => {

const [b1, setB1] = useState(0)

function FromMenu(x){

  console.log("From Menu: "+x)

  setB1(x)
}

  return (
    <>

      {

        (b1===0) ? <Menu fromMenu = {FromMenu}/> : (b1===1) ? <Home ComeBack={()=>{setB1(0)} } /> : <Settings ComeBack={()=>{setB1(0)} }/>
     }

    </>

  )
}

export default App


