
import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Home = () => {
    return (
        <div>
        <p> iam home</p>

        <Button variant='contained' color='primary' style={{ width:'300px' }}> Click ME</Button>

        <Button color='primary'>Click</Button>
    <br/>

    <TextField variant='outlined' label='Enter Email' style={{marginTop:'100px', width:'500px'}}></TextField>

    <br/>

    <TextField variant='outlined' label='Enter Password' style={{marginTop:'20px', width:'500px'}}></TextField>

        
        </div>
    )
}

export default Home
