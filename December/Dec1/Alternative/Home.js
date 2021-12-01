


 const Home = (props) =>{

    
    return(
        <>

        <div style={{height:'100vh', backgroundColor:'red'}}>
        <div style={{display:'flex', justifyContent:'flex-start'}}>
                <button onClick={props.ComeBack} >Back</button>
            </div>
        <p style={{backgroundColor:'yellow', padding:10, textAlign:'center'}}>I am Home from Nav {props.name}</p>

        </div>

       

        </>
    )
}

export default Home