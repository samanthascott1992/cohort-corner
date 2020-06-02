import React from "react";
import oldpaper from "../../Images/oldPaper.jpg"


function Jumbotron({ children }) {
  return (
    <div
      style={{ background: `url(${oldpaper})`, height: 150, clear: "both", paddingTop: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
