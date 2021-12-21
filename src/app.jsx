import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import jwt_decode from "jwt-decode";


import Register from "./components/Register/register";
import Login from "./components/Login/login"
import NavigationBar from "./components/NavigationBar/navigationBar";
import Equipment from "./components/Equipment/equipment";
import Logout from "./components/Logout/logout"







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
          let user = this.state.user;
          console.log(user);
          
            return (
              <div>
                <NavigationBar user={user} />
           
               <Switch>

            <Route 
            path="/" 
            exact render={(props) => {
              if (!user) {
                return < Redirect to="/register" />;
            } else {
              return <Home {...props} user={user} />;
            }
            } }
            />

             <Register path="/Register" component={Register} />
             <NavigationBar path="/NavigationBar" component={NavigationBar} />
             < Equipment path="/Equipment" component={Equipment} />
             < Logout path="/Logout" component={Logout} user={user} />
             < Login path="/Login" component={Login} /> 


            </Switch>
            </div>
              ); 
             }            
            }
          
          
    export default App;   