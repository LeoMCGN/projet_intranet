import { useState } from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
