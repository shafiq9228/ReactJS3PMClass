import React from 'react'

import { useHistory } from 'react-router'

const Home = () => {

    const history = useHistory()

    function Page11(){

        history.push('/page1')

    }
    function Page22(){

        history.push('/page2')

    }
    function Page33(){

        history.push('/page3')

    }
    return (
        <div style={{backgroundColor:'white', height:'100vh'}}>.

            <p style={{marginTop:'100px', textAlign:'center'}}>I am Home</p>

            <div style={{width:'100px', margin:'auto'}}>
                <button style={{display:'block',width:'100px'}} onClick={Page11}>Page1</button>
                <button style={{display:'block',width:'100px'}} onClick={Page22}>Page2</button>
                <button style={{display:'block',width:'100px'}} onClick={Page33}>Page3</button>
            </div>


        </div>
    )
}

export default Home
