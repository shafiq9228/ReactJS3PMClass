
import './css/home.css'

import { useState } from 'react'

let num = 0

export default function Home(){


   
    const [sNum, setsNum] = useState(0)

    


    function ChangeCounter(){

        num = num + 1
                
        setsNum(num)

    }


    return(
        <>

        <div className="parent">


        <h2>{sNum}</h2>

        <div className="counter">
                 <button onClick={ChangeCounter} className="button button1">Green</button>
        </div>

       

        </div>


        </>
    )
}