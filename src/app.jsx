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
                
            )
        }

    }
}