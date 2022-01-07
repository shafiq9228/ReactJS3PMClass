

import React from 'react'

import {useSelector} from 'react-redux';

const ChildPage = () => {

    const mystate = useSelector( (state)=>state.changeTheNum);

    return (
        <div>

        <p>Num from child page is {mystate}</p>
            
        </div>
    )
}

export default ChildPage
