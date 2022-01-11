import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addEquipment.css";

function AddEquipment() {
  const jwt = localStorage.getItem("token");
  let configObject = {
    headers: {
      "x-auth-token": jwt,
    },
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [serialNumber, setserialNumber] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const jwt = localStorage.getItem("token");
    let configObject = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    let response = await axios.post(
      "http://localhost:5000/api/equipments",
      {
        name: name,
        description: description,
        color: color,
        serialNumber: serialNumber,
      },
      configObject
    );
    console.log(response.data);

    window.location = "/Home";
  }

  return (
    <div>
      <h1>Add Equipment to Inventory</h1>
      <row>
        <form onSubmit={handleSubmit}>
          <div className="form-group" size="lg" controlId="Name">
            <label className="form-label">
              <h2>Equipment</h2>
            </label>
            <input
              className="input-add"
              autoFocus
              type="text-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="form-group" size="lg" controlId="Description">
              <label className="form-label">
                <h2>Description</h2>
              </label>
              <input
                className="input-add"
                value={description}
                id="descrip"
                onChange={(e) => setDescription(e.target.value)}
              ></input>

              <div className="form-group" size="lg" controlId="Name">
                <label className="form-label">
                  <h2>Color</h2>
                </label>
                <input
                  className="input-add"
                  autoFocus
                  type="text"
                  value={color}
                  id="colorField"
                  onChange={(e) => setColor(e.target.value)}
                />
                <div className="form-group" size="lg" controlId="Name">
                  <label className="form-label">
                    <h2>Serial Number</h2>
                  </label>
                  <input
                    className="input-add"
                    autoFocus
                    type="text"
                    value={serialNumber}
                    id="serialNumberField"
                    onChange={(e) => setserialNumber(e.target.value)}
                  />
                </div>
              </div>
              <div class="d-grid gap-2 col-1 mx-auto float-right">
                <button class="colorButton" type="submit" id="addButton">
                  <h3>Add</h3>
                </button>
              </div>

              <div class="col-md-3"></div>
            </div>
          </div>
        </form>
      </row>
    </div>
  );
}

export default AddEquipment;
