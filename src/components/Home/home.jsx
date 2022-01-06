import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyEquipment from "../MyEquipment/myEquipment";

function Home() {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const jwt = localStorage.getItem("token");
  let configObject = {
    headers: {
      "x-auth-token": jwt,
    },
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

  return (
    <div>
      <h1>{userProfile && userProfile.name}</h1>
      <button type="button" class="btn btn-dark">
        <Link to="/add">Add Equipment </Link>
        <div>{MyEquipment}</div>
      </button>
    </div>
  );
}

export default Home;
