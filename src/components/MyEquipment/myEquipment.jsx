import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./myEquipment.css";
import Map from "../Map/Map";

function MyEquipment() {
  const [myEquipments, setMyEquipment] = useState([]);
  const [deleteMyEquipment, setDeleteMyEquipment] = useState([]);

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

  async function deleteEquipment(equipment_id) {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };

    try {
      let response = await axios.delete(
        `http://localhost:5000/api/users/current/myList/${equipment_id}`,
        configObject
      );
      // Delete the equipment off the table by removing it from the myEquipments state
      const remainingEquipments = myEquipments.filter((equipment) => {
        if (equipment._id === equipment_id) {
          return false;
        } else {
          return true;
        }
      });
      setMyEquipment(remainingEquipments);
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
      <h1>My Equipment List</h1>
      <table id="layout">
        <thead>
          <th> Equipment Type</th>
          <th>Description</th>
          <th>Date Added</th>
          <th>Color</th>
          <th>Serial Number</th>
          <th>Status</th>
          <th>Address</th>
          <th>Delete Equipment</th>
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
                <td>
                  <button
                    id="theButton"
                    onClick={() => deleteEquipment(equipment._id)}
                  >
                    Delete
                  </button>
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
