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
            <table id='layout'>
      <thead>
        <th>Equipment Type</th>
        <th>Description</th>
        <th>Status</th>
       
      </thead>
      <tbody>
            {equipments.length > 0 &&
              equipments.map(theEquipment => {
                return (
                  <tr>
                  <td>{theEquipment.name}</td>
                  <td>{theEquipment.desc}</td>
                   <td>{theEquipment.isAvailable}</td>
                  
                </tr>
                )
              }
             
              
              
              )  
            }
        </tbody>
           </table>
        </div>
    );
}
export default Equipment;