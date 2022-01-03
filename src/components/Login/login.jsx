import React, { useState } from "react";
import axios from "axios";
import "./login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.post("http://localhost:5000/api/users/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    // Save token in local storage and refresh page
    localStorage.setItem("token", response.data);
    window.location = "/Home";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="header">
            <h2>Tampa Palms Community </h2>
          </div>
          <h3>Enter Your Information</h3>
          <div>
            <div className="card text-white bg-dark" style={{ width: "20rem" }}>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group" size="lg" controlId="email">
                    <label className="form-label">Email</label>
                    <input
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="form-group" size="lg" controlId="password">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-secondary" type="submit">
                      <h3>Login</h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
