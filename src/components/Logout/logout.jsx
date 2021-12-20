import React from "react"

const LogOut=() =>{

    function logout(){
        localStorage.removeItem('token')
        window.location = '/login';
    }

    return(

             <div>
                <button className = "LogOut-button" onClick={logout}>LogOut</button>
            </div>

    )
}

export default LogOut;