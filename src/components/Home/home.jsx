import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [userProfile, setUserProfile] = useState();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [newEquipment, setNewEquipment,data,setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerEquipment = {
      name: name,
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

 
  
  
  



    return(
      <div>
{ <h1>Hello World</h1> }
      {/* <form class="row g-3"onSubmit={(e) => handleSubmit(e)}> 
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Equipment Name</label>
    <input
                      autoFocus
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Equipment Description</label>
    <input
                      autoFocus
                      type="desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
  </div> */} */}
  
  {/* <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"> </input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>

</form> */}
</div>
    )}     

export default Home;