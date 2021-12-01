import Home from "./Nav/Home"
import Settings from "./Nav/Settings"

import { useState } from "react"

const Menu = () => {
  return (
    <>
      <div>
        <p style={{ textAlign: 'center' }}>App Page</p>

        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto', marginTop: '40px' }}>
          <button style={{ marginTop: '15px' }}  >Home</button>
          <button style={{ marginTop: '15px' }}>Settings</button>
        </div>
      </div>
    </>
  )
}

const App = () => {

  const [b1, setB1] = useState(0)

  function GoBack() {
    setB1(0)
  }


  return (
    <>

      {

        (b1===0) ? <div>
        <p style={{ textAlign: 'center' }}>App Page</p>

        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: 'auto', marginTop: '40px' }}>
          <button style={{ marginTop: '15px' }} onClick={ ()=>{setB1(1)}} >Home</button>
          <button style={{ marginTop: '15px' }} onClick={ ()=>{setB1(2)}}>Settings</button>
        </div>
      </div> : (b1===1) ? <Home ComeBack={GoBack}/> : <Settings ComeBack={GoBack}/>
     }

    </>

  )
}

export default App


