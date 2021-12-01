


const Settings = (props) => {
    return (
        <>
                

            <div style={{ height: '100vh', backgroundColor: 'orange' }}>

            <div style={{display:'flex', justifyContent:'flex-start'}}>
                <button onClick={props.ComeBack} >Back</button>
            </div>
                <p style={{ backgroundColor: 'yellow', padding: 10, textAlign: 'center' }}>I am Settings from Nav</p>

            </div>


        </>
    )
}

export default Settings