import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [userProfile, setUserProfile] = useState();
  const [desc, setDesc,equipmentId] = useState("");
  
  const [newEquipment, setNewEquipment,data,setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerEquipment = {
      name: Name,
      desc: desc
      
    };
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .post("http://localhost:5000/api/equipment", registerEquipment, configObject)
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


  useEffect(() => {
    getCurrentUser();
  }, [newEquipment]);

  useEffect(() => {
    getCurrentUser();
  }, [newEquipment]);
  
  
  
  



    return(
       
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Equipment Type</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required></input>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Description</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required></input>
  </div>
  
 
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
        
    );
}
export default Home;