import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import './equipment.css'



function Equipment(){
    const [equipments, setEquipment] = useState([]);
    const [ desc, setDesc] = useState([])
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
                <Link to='/Equipment'>
                 <h1>Equipment List</h1> 
                </Link>

        
            <table id='layout'>
      <thead>
        <th>Equipment Type</th>
        <th>Description</th>
        <th>Status</th>
       
      </thead>
      <tbody>
            {equipments.length > 0 &&
              equipments.map(equipments => 
                <tr key= {equipments.id}>
                  
                  <td>{equipments.name}</td>
                  <td>{equipments.description}</td>
                   <td>{equipments.isAvailable == "true"? "Available": "Unavailable"

                   }</td>
                  
                </tr>
                )}
              
             
              
              
               
            
        </tbody>
           </table>
        </div>
    );
}
export default Equipment;