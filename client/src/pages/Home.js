import React, {useState, useEffect } from "react";
import vbooks from "../Images/library.mp4";
import { useAuth0 } from "../react-auth0-spa";
import { Player } from "video-react"


const styles = {
  img: {
    width: "100%",
    height: "80%",
    zIndex: 1,
  },
  button: {
    zIndex: -1,
    float: "center",
    position: "absolute",
    margin: "40%",
  },
};

function Home() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (

      <Player
      playsInline
      src={vbooks}
      autoplay
      fluid={false}
      width={80%}
      height={50%}
    />


    );
};



   export default Home;
