import { Switch, Route, Redirect } from "react-router-dom";
import React, { Component } from "react"






class App extends Component {
    constructor(props) {
        super(props){
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
        componentDidMount() {
            const jwt = localStorage.getItem("token");
            try{
                const decodedUser = jwt_decode(jwt);
                this.setState({
                    user: decodedUser,
                });
            } catch {}
        }
        render() {
            let user = this.state.user;
            console.log(user);
            return (
              <div>
                <TopBar user={user} />
                <div>
                {/* <div className="card" style={{width: "18rem"}}>
                     <img src="..." className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <h5 clasNames="card-title">Card title</h5>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                    </div> */}
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
                    <Route path="/allfriends" component={Friends} />
                    {/* <Route path="/not-found" component={NotFound} /> */}
                    {/* <Redirect to="/not-found"/> */}
                  </Switch>
                </div>
              </div>
            );
          }
            }}
          
export default App;
    