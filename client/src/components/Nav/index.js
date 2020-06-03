import React from "react";
import rowofBooks from "../../Images/rowofbooks.jpg"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" style={{ background: `url(${rowofBooks})`}}>
      <a className="navbar-brand" href="/">
        
        <h3 style={{color: 'black' }} >Dereferencing Pointers
        </h3>
      </a>
    </nav>
  );
}

export default Nav;
