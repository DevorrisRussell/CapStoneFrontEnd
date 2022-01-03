import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./equipment.css";

function Equipment() {
  const [equipments, setEquipment] = useState([]);
  const [desc, setDesc] = useState([]);
  useEffect(() => {
    getAllEquipment();
  }, []);

  async function getAllEquipment() {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    let response = await axios.get(
      `http://localhost:5000/api/equipments`,
      configObject
    );
    setEquipment(response.data);
    console.log(response.data);
  }

  async function rent(equipmentId) {
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    console.log("jwt otken", jwt);
    try {
      let response = await axios.put(
        `http://localhost:5000/api/equipments/${equipmentId}/isAvailable`,
        {},
        configObject
      );
      if (response.status === 200) {
        const updatedEquipments = equipments.map((equipment) => {
          if (equipment._id === equipmentId) {
            equipment.isAvailable = false;
          }
          return equipment;
        });
        setEquipment(updatedEquipments);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Link to="/Equipment">
        <h1>Equipment List</h1>
      </Link>

      <table id="layout">
        <thead>
          <th>Equipment Type</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {equipments.length > 0 &&
            equipments.map((equipments) => (
              <tr key={equipments._id}>
                <td>{equipments.name}</td>
                <td>{equipments.description}</td>
                <td>
                  {equipments.isAvailable === true
                    ? "Available"
                    : "Unavailable"}
                </td>
                <td>
                  <button
                    disabled={!equipments.isAvailable}
                    onClick={() => rent(equipments._id)}
                  >
                    {" "}
                    Rent{" "}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Equipment;
