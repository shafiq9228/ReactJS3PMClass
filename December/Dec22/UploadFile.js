

import React, {useState} from 'react'
import { mystorage } from '../FirebaseAll/fire1';

import { getStorage, ref, uploadBytes } from "firebase/storage";




let file;
const UploadFile = () => {


    const [img, setImg] = useState("")


    function handleSubmit(e){
        e.preventDefault()


        let myrandomNumber = makeid(12);
       

        try{
            const storageRef = ref(mystorage, 'myFiles/'+myrandomNumber+'.png');
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');

                console.log(myrandomNumber+".png")
    
              });

        }
        catch(err){
                console.log("Some error:")
                console.log(err)
        }

        
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
        }
        return result;
      }

    function handleChange(e){

            file = e.target.files[0];

            console.log(e.target.value);

    }
    return (
        <div>


            <div style={{width:'200px', margin:'auto'}}> 


                <form action="" onSubmit={handleSubmit}>

                    <input type="file" name="img" placeholder='Select File' value={img} onChange={handleChange} />

                    <br/>
                    <br/>
                    <br/>

                    <input  type="submit" value="UploadImage"/>


                </form>

            </div>


            <img src="https://firebasestorage.googleapis.com/v0/b/dec18test-e315c.appspot.com/o/myFiles%2FAzrRMKc6nMzi.png?alt=media&token=83640757-acdc-465f-9f63-c55316d1205f" />



        </div>
    )
}

export default UploadFile
