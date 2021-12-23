import React, { useState, useEffect } from 'react'

const FetchWeather = () => {


    const [temp, setTemp] = useState(0.0)

    const [list, setList] = useState([])

    function getWeather() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=1eb2b35b1267abf5fba7e25ba5e3e600")
            .then(response => response.json())
            .then(data => {
                console.log(data.main.temp)

                setTemp(data.main.temp - 273.15)
            })
            .catch(error => {
                console.log(error)
            });
    }

    function getServiceData() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => {
                console.log(data.title)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function getList() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                console.log(data)

                setList(data)


            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getWeather()
    }, [])
    return (
        <div>

            <button onClick={getWeather}>FetchWeather</button>

            <button onClick={getServiceData}>getService</button>

            <button onClick={getList}>getList</button>

            <p>Display: {temp.toFixed(2)} </p>

            {
                list.map((dt) => {
                    return <>  <p> {dt.id} </p> <p> {dt.body} </p> </> 
                })

            }
        </div>
    )
}

export default FetchWeather
