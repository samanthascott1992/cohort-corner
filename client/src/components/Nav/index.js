import React from "react";
import rowofBooks from "../../Images/rowofbooks.jpg"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" style={{ background: `url(${rowofBooks})`}}>
      <a className="navbar-brand" href="/">
        
        Dereferencing Pointers
        
      </a>
    </nav>
  );
}

export default Nav;
