import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Logout() {
  localStorage.clear();
  window.location = "/";
}

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={Logout} className="nav-link">
              Déconnexion
            </button>
          </li>
          <li>
            <Link to={"/sayhello/"} className="nav-link">
              Dire bonjour!
            </Link>
          </li>
          <li>
            <Link to={"/list/"} className="nav-link">
              Liste des salariés
            </Link>
          </li>
          <li>
            <Link to={"/modificationprofil/"} className="nav-link">
              Mon profil
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
