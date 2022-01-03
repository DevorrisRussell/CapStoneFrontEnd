import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "../Login/login";
import Register from "../Register/register";
import LogOut from "../Logout/logout";
import "./navigationBar.css";

function NavigationBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        {user && <h1>Welcome {user.username}</h1>}
        <ul className="navbar-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/equipment">Equipment</Link>
          </li>

          {!user && (
            <React.Fragment>
              <li>
                <Link to="/register">Register</Link>
              </li>

              <li>
                <div class="d-grid gap-2 col-1 mx-auto">
                  <Link to="/Login">Login</Link>
                </div>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li>
                <div class="d-grid gap-2 col-1 mx-auto">
                  <LogOut class="btn btn-outline-primary" />
                </div>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
