import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "../Login/login";
import Register from "../Register/register";
import LogOut from "../Logout/logout";
import "./navigationBar.css";

function NavigationBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {user && (
            <li>
              <h1>Welcome {user.name}</h1>
            </li>
          )}
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
                <Link to="/Login">Login</Link>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li>
                <Link to="/add">Add Equipment</Link>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li>
                <LogOut class="btn btn-outline-primary" />
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
