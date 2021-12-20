import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import jwt_decode from "jwt-decode";


import Register from "./components/Register/register";
import Login from "./components/Login/login"







class App extends Component {
    constructor(props) {
        super(props); {
            const jwt = localStorage.getItem('token');
            try {
                const decodedUser = jwt_decode(jwt);
                this.state = {
                    user: decodedUser,
                };
            } catch {
                this.state = {
                    user: null,
                };
            }
        } 
      }
      render( )
        {
          
            return (
             <div className="App">
               <Switch>

            <Route path="/Login" component={Login} />

             <Register path="/Register" component={Register} />


            </Switch>
             </div>
              );  }            
            }
          
          
    export default App;   