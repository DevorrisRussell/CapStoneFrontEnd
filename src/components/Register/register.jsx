import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Login from "../Login/login";
import "./register.css";
import { googleAPIKey } from "../../ApiKeys";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [address, setAddress] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [streetName, setStreetName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let responseLatLng = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${streetNumber}${streetName}${city}${state}&key=${googleAPIKey}`
    );
    console.log("responselatlng", responseLatLng);
    // );
    let User = {
      name: Name,
      email: email,
      password: password,
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      state: state,
      isAdmin: false,
      address: responseLatLng.data.results[0].formatted_address,
      lat: responseLatLng.data.results[0].geometry.location.lat,
      lng: responseLatLng.data.results[0].geometry.location.lng,
    };
    let response = await axios.post(
      "http://localhost:5000/api/users/register",
      User
    );
    console.log(response.data);
    localStorage.setItem("token", response.data);
    window.location = "/login";
  }

  return (
    <div className="container registerContainer">
      <h2>Share and borrow equipment with your community</h2>

      <div className="card text-black bg-light" style={{ width: "28rem" }}>
        <div className="card-body">
          <div class="col-md-10">
            <form onSubmit={handleSubmit}>
              <div className="form-group" size="lg" controlId="name">
                <label className="form-label" id="formName">
                  <h2>Enter your information</h2>
                  <label>Name</label>

                  <input
                    autoFocus
                    type="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div
                className="form-group"
                size="lg"
                controlId="email"
                id="formEmail"
              >
                <label>Email</label>
                <input
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="form-group"
                size="lg"
                controlId="password"
                id="formPassword"
              >
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className="form-group"
                size="lg"
                controlId="Street Number"
                id="formStreetNumber"
              >
                <label>Street Number</label>
                <input
                  autoFocus
                  type="Street Number"
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                />
              </div>
              <div
                className="form-group"
                size="lg"
                controlId="Street Name"
                id="formStreetName"
              >
                <label>Street Name</label>
                <input
                  autoFocus
                  type="Street Name"
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                />
                <div
                  className="form-group"
                  size="lg"
                  controlId="City"
                  id="formCity"
                >
                  <label id="cityForm">City</label>
                  <input
                    autoFocus
                    type="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div
                  className="form-group"
                  size="lg"
                  controlId="State"
                  id="formState"
                >
                  <label>State</label>
                  <input
                    autoFocus
                    type="State"
                    value={state}
                    id="stateField"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <h3>Create an account</h3>
                <button class="buttonField" type="submit">
                  Register
                </button>
              </div>
            </form>
            <Link to="/Login">
              <button className="buttonField">
                Already a user? Login Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
