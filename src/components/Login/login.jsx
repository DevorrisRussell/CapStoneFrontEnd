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
    <div className="container loginWrapper">
      <div class="header">
        <h2>Tampa Palms Community </h2>
      </div>

      <div className="col loginContainer">
        <div>
          <div>
            <h3>Enter Your Information</h3>
            <div
              className="card text-white bg-dark loginCard"
              style={{ width: "24rem", padding: "2em 3em" }}
            >
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div
                    className="form-group"
                    size="lg"
                    controlId="email"
                    id="loginField"
                  >
                    <label className="form">Email:</label>
                    <input
                      className="input-login"
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
                    id="passwordField"
                  >
                    <label className="form">Password:</label>
                    <input
                      type="password"
                      value={password}
                      id="input-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="d-grid gap-2">
                    <button class="buttonField" type="submit">
                      <h3>Login</h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="col-md-3 video-box">
            <div class="wrapper">
              <iframe
                width="400"
                height="315"
                src="https://www.youtube.com/embed/dqF4b1SboLk?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
