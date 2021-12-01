

function MyPage1(){

    let num = 20

    return(
        <div style={{backgroundColor:'red', height:'400px'}}>
            <p>My Page 1  {num}</p>
        </div>
    )
}

export function MyPage2(){

    return(
        <div style={{backgroundColor:'blue', height:'400px'}}>
            <p style={{color:'white'}}>My Page 2</p>
        </div>
    )
}

export default MyPage1
