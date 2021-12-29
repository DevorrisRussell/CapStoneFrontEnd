import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"



function Equipment(){
    const [equipment, setEquipment] = useState([])

   useEffect(() => {
      getAllEquipment();
   }, [])


    async function getAllEquipment() {
        const jwt = localStorage.getItem('token');
        let configObject = {
            headers: {
                'x-auth-token': jwt
            }
        } 
        let response = await axios.get(`http://localhost:5000/api/equipment`, configObject)
        setEquipment(response.data)
        console.log(response.data)
    }



    return(
        <div>
            <Link to='/Equipment'>Equipment</Link>
        
            {equipment.length > 0 &&
              equipment.map(theEquipment => <h1>{theEquipment._id} </h1> )  
            }
        
           
        </div>
    );
}
export default Equipment;