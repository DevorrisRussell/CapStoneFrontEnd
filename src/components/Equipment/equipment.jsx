import React, { useState, useEffect } from "react";
import axios from "axios";
import "./equipment.css";
import { propertiesParser } from "config/parser";
//import { propertiesParser } from "config/parser";


function Equipment(){
  const [userProfile, setUserProfile] = useState();
  const [desc, setDesc,equipmentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerEquipment = {
      name: "",
      desc: desc,
     
    };
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .post("http://localhost:5000/api/equipment/", registerEquipment, configObject)
      .then((res) => setUserProfile(res.data));
  };

  const getCurrentUser = async () => {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .get(`http://localhost:5000/api/users/current`, configObject)
      .then((res) => setUserProfile(res.data));
  };


  // useEffect(() => {
  //   getCurrentUser();
  // }, [newEquipment]);

    return (
     
   
      <div>
      <h1> Equipment List </h1>
      <div className="Comment">
        <form onSubmit={(e) => handleSubmit(e)}>
          {equipmentId.map((equipmentId) => (
            <div className=" form-inline" key={Equipment}>
              </div>
          )
          )}
          <div className="card">
            <div className="card-header"></div>
            <div class="card-body">
              <blockquote className="blockquote mb-0">
                <div className="form-group" size="lg" controlId="name">
                  <label className="form-label">
                  
                  <button onSubmit={(e) => handleSubmit(e)}>Add Equipment</button>
                  
                  <button onSubmit={(e) => handleSubmit(e)}>Borrow Equipment</button>
                  
                  

                  {/* <table class="table"> */}
  {/* <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    {Equipment?.map((Equipment) => (
      <tr>
        <li key=   {Equipment.name}> </li>
      </tr>
    )
    )}
  </tbody>
                   </table>  */}
         </label>
                </div>
                
              </blockquote>
            </div>
          </div>
        </form>
      </div>
      </div>
      
      
     
      )
    }

export default Equipment;