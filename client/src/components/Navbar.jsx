import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/main/`}>Déconnexion </Link>
          </li>
          <li>
            <Link to={`/sayhello/`}>Dire bonjour!</Link>
          </li>
          <li>
            <Link to={`/list/`}>Liste des salariés </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
