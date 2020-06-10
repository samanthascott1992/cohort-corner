import React, {useState, useEffect } from "react";
// import vbooks from "../Images/library.mp4";
// import { Player } from "video-react"
import cohortCorner from "../Images/cohortcorner4.png";
import { useAuth0 } from "../react-auth0-spa";

function Home() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
      <img src={cohortCorner}  alt="library" />



    );
};



   export default Home;
