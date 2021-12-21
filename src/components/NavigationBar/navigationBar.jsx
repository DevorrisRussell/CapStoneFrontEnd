import React from "react";
import {Link} from 'react-router-dom';
import axios from "axios";


function NavigationBar({user}){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            {user && <h4>Welcome {user.username}</h4>}
            <ul className="navbar-nav">
            <li>
           

                        <Link to='/register'>
                            <button type="button" class="btn btn-outline-primary"><h3>Register</h3></button>
                        </Link>
                       
                        </li>
                        {!user &&
                            <React.Fragment>
                                <li>
                                    <Link to='/equipment'>
                                    <button type="button"class="btn btn-outline-primary"><h3>Equipment</h3></button>
                                    </Link>
                             
                                    
                                   
                                </li>
                                
                                <li>
                                <div class="d-grid gap-2 col-1 mx-auto">
                                    <Link to='/Login'>
                                <button type="button"class="btn btn-outline-primary"><h3>Login</h3> </button>
                                </Link>
                                </div>
                                </li>
                                
                            </React.Fragment>
                        }
                        {user &&
                            <React.Fragment>
                               
                                <li>
                                   
                                    
                                </li>
                                
                    </React.Fragment>                   
                }
            </ul>
        </div>
    </nav>
)
}



export default NavigationBar; 