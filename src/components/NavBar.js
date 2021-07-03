import React from "react";
import "./styleSheets/navbar.css";

function Navbar() {
  return (
    <div id="container">
      <div id="logoHolder">Twitter</div>
      <div id="actionContainer">
        <ul id="list">
          <li className="listItem">Home</li>
          <li className="listItem">Logout</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
