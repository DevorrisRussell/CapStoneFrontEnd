import React, { useState, useEffect } from "react";
import axios from "axios";
import "./equipment.css";
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
          <div className="card">
            <div className="card-header"></div>
            <div class="card-body">
              <blockquote className="blockquote mb-0">
                <div className="form-group" size="lg" controlId="name">
                  <label className="form-label">
                  <button type="submit">Add Equipment</button>
                    <input
                      autoFocus
                      type="desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
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