import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./equipment.css";
import Map from "../Map/Map";

function MyEquipment() {
  const [myEquipments, setMyEquipment] = useState([]);

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
    try {
      let response = await axios.get(
        `http://localhost:5000/api/users/current/myList/`,
        configObject
      );
      setMyEquipment(response.data);
      console.log("My equpment??", response.data);
    } catch (err) {
      console.log("err", err);
    }
  }

  async function rent(equipmentId) {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };

    try {
      let response = await axios.get(
        `http://localhost:5000/api/users/current/myList`,
        {},
        configObject
      );
      if (response.status === 200) {
        const updatedEquipments = myEquipments.map((equipment) => {
          if (equipment.myEquipments === myEquipments) {
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
          <th>Address</th>
        </thead>
        <tbody>
          {myEquipments.length > 0 &&
            myEquipments.map((equipment) => (
              <tr key={equipment._id}>
                <td>{equipment.name}</td>
                <td>{equipment.description}</td>
                <td>{equipment.dateModified}</td>
                <td>{equipment.color}</td>
                <td>{equipment.serialNumber}</td>
                <td>
                  {equipment.isAvailable === true ? "Available" : "Rented"}
                </td>
                <td>
                  {equipment.rentedAddress ? equipment.rentedAddress : "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Map myEquipments={myEquipments} />
    </div>
  );
}

export default MyEquipment;
