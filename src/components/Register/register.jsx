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
    let User = {
      name: Name,
      email: email,
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      state: state,
      isAdmin: false,
      address: null,
      lat: null,
      lng: null,
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
    <div className="container">
      <div class="row">
        <div class="col-md-3">
          <h3>Share and borrow equipment with your community</h3>
        </div>

        <div className="card text-black bg-light" style={{ width: "22rem" }}>
          <div className="card-body">
            <div class="col-md-10">
              <form onSubmit={handleSubmit}>
                <div className="form-group" size="lg" controlId="name">
                  <label className="form-label">
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
                <div className="form-group" size="lg" controlId="email">
                  <label>Email</label>
                  <input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group" size="lg" controlId="password">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group" size="lg" controlId="Street Number">
                  <label>Street Number</label>
                  <input
                    autoFocus
                    type="Street Number"
                    value={streetNumber}
                    onChange={(e) => setStreetNumber(e.target.value)}
                  />
                </div>
                <div className="form-group" size="lg" controlId="Street Name">
                  <label>Street Name</label>
                  <input
                    autoFocus
                    type="Street Name"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                  />
                  <div className="form-group" size="lg" controlId="City">
                    <label>City</label>
                    <input
                      autoFocus
                      type="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="form-group" size="lg" controlId="State">
                    <label>State</label>
                    <input
                      autoFocus
                      type="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <p>Create an account</p>
                  <button class="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
              <Link to="/Login">
                <button className="btn btn-primary">
                  Already a user? Login Here
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <img
            src="https://media.istockphoto.com/photos/lawnmower-picture-id178033413?b=1&k=20&m=178033413&s=170667a&w=0&h=LO6xAQ6O-5SLPqZktnBeI7kTRNin4LCTyiFr9Wb6Qx0="
            class="rounded float-start"
          ></img>

          <img
            src="https://media.istockphoto.com/photos/garden-hand-tools-picture-id168857847?b=1&k=20&m=168857847&s=170667a&w=0&h=v-nWL_ZB4Zu-RP4Dzm27-XE9nq3evB0q0r_bqiJm6AY="
            class="rounded float-start"
          ></img>
          <img
            src="https://media.istockphoto.com/photos/yard-edger-in-action-picture-id157642264?b=1&k=20&m=157642264&s=170667a&w=0&h=f0dILmc1iNYaRNGLkghaLx3-ESAVF4IA9nc4Dd14tbY="
            class="rounded float-start"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Register;
