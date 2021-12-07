import Blog from "./Components/Blog"
import Home from "./Components/Home"
import Settings from "./Components/Settings"
import { useState } from "react"


function App(){

  let num = 10

  const [num1, setNum1] = useState(5)

  function ChangeValue(){
   setNum1(num1+10)
  }

  function TriggerFromChild(empCount){

    console.log("I got triggered from settings : "+empCount)
    setNum1(empCount)
  }

  return(
    <>

      <h1 style={{textAlign:'center'}}>I am App Title {num }  num1: {num1}  </h1>

      <button onClick={ChangeValue}>Change {num1}</button>

    <Home age={num1}/>
  
    <Settings operate={TriggerFromChild} rank={num1}/>
    <Blog/>

    </>
  )
}

export default App