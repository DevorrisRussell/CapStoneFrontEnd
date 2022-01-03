import React, { useState, useEffect } from "react";
import axios from "axios";

function AddEquipment() {
  const jwt = localStorage.getItem("token");
  let configObject = {
    headers: {
      "x-auth-token": jwt,
    },
  };

  return (
    <div>
      <h1>Add a new Equipment</h1>
    </div>
  );
}

export default AddEquipment;
