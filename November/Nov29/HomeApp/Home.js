
import './css/home.css'

import { useState } from 'react'

let num = 0

export default function Home(props) {

    const [sNum, setsNum] = useState(0)

    function ChangeCounter() {

        num = num + 1
        setsNum(num)

    }

    const style1 = {backgroundColor: props.back}


    return (
        <>

            <div className="parent" style={style1}>

                <h2 style={{color:props.tColor}}>{sNum}</h2>

                <div className="counter">
                    <button onClick={ChangeCounter} className="button button1"> {props.lable} </button>
                </div>

            </div>


        </>
    )
}