import React from "react"

const LogOut=() =>{

    function logout(){
        localStorage.removeItem('token')
        window.location = '/login';
    }

    return(
            <li class= "float-right">
             <div>
                 <div class="d-grid gap-2 col-1 mx-auto float-right">
                <button type="button"class="btn btn-outline-primary LogOut-button" onClick={logout}>LogOut</button>
                </div> 
            </div></li>

    )
}

export default LogOut;