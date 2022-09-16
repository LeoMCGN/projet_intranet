import { useState, useEffect } from "react";
import APIService from "../services/APIService";
import Card from "./Card";
import Navbar from "./navbar";

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
      <div className="input-field-container">
        <input type="text" placeholder="Rechercher..." className="input-field-search" />
        <select name="select1">
          <option value="Nom">Nom</option>
          <option value="Léo">Léo</option>
          <option value="Pierre">Pierre</option>
          <option value="Elisa">Elisa</option>
        </select>
        <select name="select2" className="select2">
          <option value="Categorie">Catégorie</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Technique</option>
          <option value="Developpeur">Client</option>
        </select>
      </div>
      {collaborators.map((collaborator) => (
        <Card collaborator={collaborator} key={collaborator.id} />
      ))}
    </div>
  );
}

export default List;
