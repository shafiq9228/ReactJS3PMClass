import Page1, { Page2 } from "./MyPages"




function App(){

  const mystyle1 = {
    textAlign:'center',
    marginTop:'20px'
  }

  let Rank = 300



  return(
    <>


    <div style={ {backgroundColor:'blue', height:'400px', color:'white'} }>

    
        <Page1/>

        <Page2/>

        <p style={mystyle1}> My GATE rank is {Rank} </p>

    </div>

    </>
  )
}



export default App

