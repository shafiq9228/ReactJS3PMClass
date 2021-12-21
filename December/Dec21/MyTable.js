import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc, deleteDoc , updateDoc  } from "firebase/firestore";
import { db } from '../FirebaseAll/fire1';
import './mytable.css';



const MyTable = () => {

    let list = [1, 3, 5, 6, 7];

    const [list2, setList2] = useState([])
    // let list2 = [];

    const [form1, setForm] = useState("esfgb")


    async function GetAllDocuments() {

        setList2([])

        const myquery = await getDocs(collection(db, "Employees"));

        myquery.forEach((doc1, key) => {
            console.log(doc1.id);
            // console.log(doc.data())
            console.log(doc1.data().email)

            //setList2([...list2, {name:doc.data().name, email: doc.data().email, key:doc.id  }])

            setList2((x1) => {
                return [...x1, { name: doc1.data().name, email: doc1.data().email, key: doc1.id }]
            })
        })

    }

    async function MyDelete(docId){
        console.log("My delete is called "+docId)

        await deleteDoc(doc(db, "Employees", docId));

        console.log("Deleted")

        GetAllDocuments() 

    }

    async function MyUpdate(docKey){
        console.log("Update is called; "+docKey)

        const updateMydoc = doc(db, "Employees", docKey);

        await updateDoc(updateMydoc, {
           name: form1
          });


          GetAllDocuments()



    }

    useEffect(() => {
    
        GetAllDocuments()
    }, [])

    return (
        <div>
            <button onClick={GetAllDocuments}>
                Get all Doucments from Employee collection
            </button>

            <input placeholder='Enter Name value' value={form1} onChange={(x)=>{setForm(x.target.value)}}/>

            <div>

                <h1>Firebase Data</h1>

                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>

                        <th>Update</th>

                    </tr>
                        {
                    list2.map((x2)=>{
                        return  <tr>
                        <td> {x2.name}</td>
                        <td>{x2.email}</td>

                        <td> <button onClick={  ()=>{ MyDelete(x2.key) }  }>del</button>  </td>

                        <td> <button onClick={  ()=>{ MyUpdate(x2.key) }  }>Modify</button>  </td>
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
