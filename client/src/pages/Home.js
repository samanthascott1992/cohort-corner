import React, {useState, useEffect } from "react";
import books from "../Images/library.png";
import { useAuth0 } from "../react-auth0-spa";


const styles = {
  img: {
    width: "100%",
    height: "80%",
    zIndex: 1
  },
  button : {
    zIndex: -1,
    float: "center",
    position: "absolute",
    margin: "40%"
  }

};


function Home() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (

        <img src={books} alt="books" className="booksImg" style= {styles.img} />
    );
};
   export default Home;