import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <nav>
      <div class="nav-header">
        <div class="nav-title">INTRANET</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="#" target="_blank" className="active">
          LOGIN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
