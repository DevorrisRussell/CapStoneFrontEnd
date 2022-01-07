import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./equipment.css";

function MyEquipment() {
  const [myequipments, setMyEquipment] = useState([]);
  const [myList, setMyDesc] = useState([]);
  useEffect(() => {
    getAllMyEquipment();
  }, []);

  async function getAllMyEquipment() {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    let response = await axios.get(
      `http://localhost:5000/api/current/myList/`,
      configObject
    );
    setMyEquipment(response.data);
    console.log(response.data);
  }

  async function rent(equipmentId) {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };

    try {
      let response = await axios.put(
        `http://localhost:5000/api/current/myList/`,
        {},
        configObject
      );
      if (response.status === 200) {
        const updatedEquipments = myList.map((equipment) => {
          if (equipment.myList === myList) {
            equipment.isAvailable = false;
          }
          return equipment;
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Link to="/Home">
        <h1>My Equipment List</h1>
      </Link>

      <table id="layout">
        <thead>
          <th> Equipment Type</th>
          <th>Description</th>
          <th>Date Added</th>
          <th>Color</th>
          <th>Serial Number</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {myList.length > 0 &&
            myList.map((myList) => (
              <tr key={myList.myList}>
                <td>{myList.name}</td>
                <td>{myList.description}</td>
                <td>{myList.dateModified}</td>
                <td>{myList.color}</td>
                <td>{myList.serialNumber}</td>
                <td>
                  {myList.isAvailable === true ? "Available" : "Unavailable"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyEquipment;
