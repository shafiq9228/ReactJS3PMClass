

function App(){

    return(
      <>
  
  
      <div style={ {backgroundColor:'blue', height:'400px', color:'white'} }>
  
      <Home/>
  
      <Settings/>
      <Settings/>
  
  
  
      </div>
  
      </>
    )
  }
  
  function Home(){
  
    return(
      <>
         <div style={{height:'300px', width:'400px',backgroundColor:'red'}}>
  
          Home
  
          <Settings/>
          <Settings/>
  
         </div>
      </>
    )
  }
  
  function Settings(){
  
    return(
      <>
         <div style={{height:'100px', width:'100px',backgroundColor:'orange'}}>
  
          Settings
  
         </div>
      </>
    )
  }
  
  export default App
  
  