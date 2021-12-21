

// import "./home.css"
import React, { useState, useEffect } from "react";
import axios from "axios";




function Home() {
  const [userProfile, setUserProfile] = useState();
 
  const [equipment, setEquipment,data,setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    await axios
      .equipment("http://localhost:5000/api/equipments/", configObject)
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
  }, []);



useEffect(() => {
  getCurrentUser();
}, [equipment]);

const likePost = (i) =>{
  const jwt = localStorage.getItem("token");
    fetch('/equipments', {
      method:"put",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        postId: i
      })
    }).then(res=>res.json())
    .then(setlike=>{
      
      const newData = data.map(post =>{
        if(post._id==setlike._id){
          return setlike
        }else{
          return post
        }
      })
      setData(newData)
    }) 
}} 
    
export default Home;
