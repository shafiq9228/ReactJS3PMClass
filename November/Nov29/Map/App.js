

import Home from "./Pages/Home"
import Model from "./Pages/Model"
import Page1 from "./Pages/Page1"


function App(){


  const list1 = ["Deepak", "Shafiq", "Yaser", "Pratyusha", "RajaShekar", "Manohar"]

  function Test(){

    console.log("I am Test")
  }

  const pi = 3.141

  const Test2 = () => {
      console.log("I am Test 2 ")
  }

  return(
    <>

     

      {

        list1.map((data)=>{

          return <Model name={data}/>

        }  )
      }

     

   
    </>
  )
}



export default App

