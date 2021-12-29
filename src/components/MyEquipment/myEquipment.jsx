import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

function MyEquipment(){
    const [myEquipment, setMyEquipment] = useState([])

   useEffect(() => {
      getAllMyEquipment();
   }, [])


    async function getAllMyEquipment() {
        const jwt = localStorage.getItem('token');
        let configObject = {
            headers: {
                'x-auth-token': jwt
            }
        } 
        let response = await axios.get(`http://localhost:5000/api/current/myList`, configObject)
        setMyEquipment(response.data)
        console.log(response.data)
    }



    return(
        <div>
            <Link to='/'>My Equipment List</Link>
          
            {myEquipment.length > 0 &&
              myEquipment.map(Equipments => <h1>{Equipments.myList} </h1> )  
            }
        
           
        </div>
    );
}
export default MyEquipment;