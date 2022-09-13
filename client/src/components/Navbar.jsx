import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

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

      <section>
        <div className="two alt-two">
          <h1>
            Intranet
            <span>Bienvenue sur l'intranet</span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
