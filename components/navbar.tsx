import React from "react";

function Navbar() {
  return (
    <section className="navbar-container  bg-white">
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-menu flex ">
          <li className="navbar-item">Find Rentals</li>
          <li className="navbar-item">Property Deals</li>
          <li className="navbar-item">Become Agent</li>
          <li className="navbar-item">About Us</li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-post-btn">Post Demand</button>
          <button className="navbar-signin-btn">Sign In</button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
