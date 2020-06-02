import React, {useState, useEffect } from "react";
import books from "../Images/library.png";
import { useAuth0 } from "../react-auth0-spa";
// import Toast from "react-bootstrap/Toast;"


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

// <Toast>
//   <Toast.Header>
//     <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
//     <strong className="mr-auto">Bootstrap</strong>
//     <small>11 mins ago</small>
//   </Toast.Header>
//   <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
// </Toast>

   export default Home;