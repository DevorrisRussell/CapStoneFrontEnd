import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import Login from "./components/login/login"






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
        componentDidMount(); {
            const jwt = localStorage.getItem("token");
            try{
                const decodedUser = jwt_decode(jwt);
                this.setState({
                    user: decodedUser,
                });
            } catch {}
        }
        render(); {
            let user = this.state.user;
            console.log(user);
            return (
             
              
                  <Switch>
                    <Route
                      path="/"
                      exact
                      render={(props) => {
                        if (!user) {
                          return <Redirect to="/register" />;
                        } else {
                          return <Home {...props} user={user} />;
                        }
                      }}
                    />
                    <Route path="/register" component={Register} />
                    <Route path="/Login" component={Login} />
                    <Route path="/logout" component={LogOut} user={user} />
                    <Route path="/equipments" component={Friends} />
                    {/* <Route path="/not-found" component={NotFound} /> */}
                    {/* <Redirect to="/not-found"/> */}
                  </Switch>
               
             
            );
          }
            }}
          
export default App;
    