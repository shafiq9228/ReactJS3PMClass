import React, { useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../FirebaseAll/fire1';
import './mytable.css';



const MyTable = () => {

    let list = [1, 3, 5, 6, 7];

    const [list2, setList2] = useState([])
    // let list2 = [];


    async function GetAllDocuments() {

        const myquery = await getDocs(collection(db, "Employees"));

        myquery.forEach((doc, key) => {
            console.log(doc.id);
            // console.log(doc.data())
            console.log(doc.data().email)

            //setList2([...list2, {name:doc.data().name, email: doc.data().email, key:doc.id  }])

            setList2((x1) => {
                return [...x1, { name: doc.data().name, email: doc.data().email, key: doc.id }]
            })
        })

    }

    return (
        <div>
            <button onClick={GetAllDocuments}>
                Get all Doucments from Employee collection
            </button>

            <div>

                <h1>Firebase Data</h1>

                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                        {
                    list2.map((x2)=>{
                        return  <tr>
                        <td> {x2.name}</td>
                        <td>{x2.email}</td>
                    </tr>
                    }  )

                        }

                   
                </table>

            </div>

        </div>
    )
}

function SubTr(prop) {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#cccccc', margin: 20, borderRadius: 10 }}>
                <h3> Name: {prop.name}</h3>

                <h3>Email:  {prop.email}</h3>
            </div>
        </>
    );
}

export default MyTable
