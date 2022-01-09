import React from "react";

const LogOut = () => {
  function logout() {
    localStorage.removeItem("token");
    window.location = "/login";
  }

  return (
    <button
      type="button"
      class="btn btn-outline-primary LogOut-button"
      onClick={logout}
    >
      LogOut
    </button>
  );
};

export default LogOut;
