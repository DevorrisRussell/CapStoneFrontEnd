
import React, { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Login from "../Login/login"

function Register(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [Name, setName] = useState("");
    

  
	async function handleSubmit(event) {
	  event.preventDefault();
      let User = {
        name: Name,
		email: email,
		password: password,
        isAdmin:false
		};
	    let response = await axios.post("http://localhost:5000/api/users/register",User);
		console.log(response.data)
		localStorage.setItem('token', response.data);
		window.location = '/login';
	}

    return(
        
        <div className="container">
            <div class="row">
              <div class="col-md-3">
              <p>Share and borrow equipment with your community</p>
            </div>
           
          <div className="card text-black bg-light" style={{width: "22rem"}}>
            <div className="card-body">
            <div class="col-md-10">

              <form onSubmit={handleSubmit}>
                <div className="form-group" size="lg" controlId="name">
                    <label className="form-label">
                        <h2>Enter your information</h2>
                    <label>Name</label>
                    <input autoFocus type="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div> 
                <div className="form-group" size="lg" controlId="email">
                    <label>Email</label>
                    <input autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group" size="lg" controlId="password">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"/>
                <p>Create an account</p>
                <button class="btn btn-primary" type='submit' >Register</button>
                </div> 
                </form>
                <Link to='/Login'>
                    <button className="btn btn-primary">Already a user? Login Here</button>
                </Link>
                </div>
             </div>
	      </div>
        </div>
      </div>
	);
}

export default Register;