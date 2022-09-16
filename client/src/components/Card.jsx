import { useState } from "react";
import "./css/card.css";

function Card({ collaborator }) {
  return (
    <div className="list-row">
      <div className="list-container">
        <div className="activite">{collaborator.service}</div>
        <img src={collaborator.photo} alt="photo de profil" />
        <div className="detail">
          <h2>
            {collaborator.firstname} {collaborator.lastname}
          </h2>
          <small>
            Ville: {collaborator.city}, {collaborator.country}
          </small>{" "}
          <br />
          <small>Mail : {collaborator.email}</small> <br />
          <small>Tel : {collaborator.phone}</small> <br />
          <small>Anniversaire: {collaborator.birthdate}</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
