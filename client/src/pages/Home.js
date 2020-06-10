import React, {useState, useEffect } from "react";
// import vbooks from "../Images/library.mp4";
// import { Player } from "video-react"
import cohortCorner from "../Images/cohortcorner4.png";
import { useAuth0 } from "../react-auth0-spa";


const styles = {
  width="100",
  height="98"
};

function Home() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
      <img src={cohortCorner} style={styles} alt="library" />



    );
};



   export default Home;
