import { useState, useEffect } from "react";
import React, { useRef } from "react";

import APIService from "../services/APIService";
import Card from "./Card";
import Navbar from "./navbar";
import logo from "../img/logo.png";

function List() {
  const [collaborators, setCollaborators] = useState([]);

  const getAllCollaborator = async () => {
    const data = await APIService.getAllCollaborators();

    setCollaborators(data);
  };

  useEffect(() => {
    getAllCollaborator();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="logo-list">
        <img src={logo} alt="logo" />
      </div>
      <div className="input-field-container">
        <input type="text" placeholder="Rechercher..." className="input-field-search" />
      </div>
      <div className="align-list">
        {collaborators.map((collaborator) => (
          <Card collaborator={collaborator} key={collaborator.id} />
        ))}
      </div>
    </div>
  );
}

export default List;
