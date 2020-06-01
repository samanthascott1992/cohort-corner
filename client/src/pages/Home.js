import React, { useState, useEffect } from "react";
import books from "../Images/library.png";

// var divStyle = {
//   width: 80%,
//   height: 80%
// }
function Home() {
    const square = 80;
    const width = 100;


    return (
        <img src={books} className="booksImg" style={{width: width + '%', height: square + '%'}} />
    );
}

export default Home;

