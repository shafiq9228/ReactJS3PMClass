

import React from 'react'

const Settings = (x1) => {

    let employeeCount = 125


    function LocalFunc(){

        x1.operate(employeeCount)
    }

    return (
        <div style={ {backgroundColor:'orange', height:'200px'} }>

            <p style={{textAlign:'center'}}>I am Setting {x1.rank}</p>

            <div style={{display:'flex', justifyContent:'space-around' }}>

                <div style={{width:'100px', height:'100px', backgroundColor:'red'}}>

                </div>

                <div style={{width:'100px', height:'100px', backgroundColor:'pink'}}>

                </div>

            </div>

            <button onClick={  ()=>{ x1.operate(employeeCount) }   }>SendData</button>

            <button onClick={LocalFunc} >SendData2</button>
            
        </div>
    )
}

export default Settings
