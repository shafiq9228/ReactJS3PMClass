

import React from 'react'

const Home = (props) => {

    let s1 = props.age - 3
    return (
        <div style={ {backgroundColor:'yellow', height:'200px'} }>

            <p style={{textAlign:'center'}}>I am Home {s1} </p>
            
        </div>
    )
}

export default Home
