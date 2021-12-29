import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"



function Equipment(){
    const [equipments, setEquipment] = useState([])

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
        let response = await axios.get(`http://localhost:5000/api/equipments`, configObject)
        setEquipment(response.data)
        console.log(response.data)
    }



    return(
        <div>
            <Link to='/Equipment'>Equipment</Link>
        
            {equipments.length > 0 &&
              equipments.map(theEquipment => <li>{theEquipment.name} </li> )  
            }
        
           
        </div>
    );
}
export default Equipment;