import React, { useState, useEffect } from "react";
import axios from "axios";

function AddEquipment() {
  const jwt = localStorage.getItem("token");
  let configObject = {
    headers: {
      "x-auth-token": jwt,
    },
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/equipments", {
      name: name,
      description: description,
    });
    console.log(response.data);
    // Save token in local storage and refresh page
    localStorage.setItem("token", response.data);
    window.location = "/Home";
  }

  return (
    <div>
      <h1>Add a new Equipment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" size="lg" controlId="Name">
          <label className="form-label">Name of Equipment</label>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="form-group" size="lg" controlId="Description">
            <label className="form-label">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-secondary" type="submit">
            <h3>Add</h3>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEquipment;
