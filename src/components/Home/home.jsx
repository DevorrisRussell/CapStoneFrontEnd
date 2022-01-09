import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyEquipment from "../MyEquipment/myEquipment";
import "./home.css";

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
    <div className="homeContainer">
      <MyEquipment />
    </div>
  );
}

export default Home;
