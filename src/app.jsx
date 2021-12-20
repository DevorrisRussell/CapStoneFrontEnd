import { Switch, Route } from "react-router-dom";
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
      componentDidMount() {
        const jwt = localStorage.getItem("token");
        try {
          const decodedUser = jwt_decode(jwt);
          this.setState({
            user: decodedUser,
          });
        } catch {}
      }

      render( )
        {
          
            return (
          
               <Switch>

            <Route path="/" exact component={Login} />

             <Register path="/Register" component={Register} />


            </Switch>
           
              ); 
             }            
            }
          
          
    export default App;   