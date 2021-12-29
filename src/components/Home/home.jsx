import React, { useState, useEffect } from "react";
import axios from "axios";
import "./equipment.css";
import { propertiesParser } from "config/parser";
//import { propertiesParser } from "config/parser";


function Home(){
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
