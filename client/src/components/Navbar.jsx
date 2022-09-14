import { useState } from "react";
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
            <button onClick={Logout}>Déconnexion </button>
          </li>
          <li>
            <button>Dire bonjour!</button>
          </li>
          <li>
            <button>Liste des salariés </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
