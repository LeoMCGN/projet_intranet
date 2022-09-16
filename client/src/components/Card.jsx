import { useState } from "react";
import "./css/card.css";

function Card({ collaborator }) {
  return (
    <div className="list-container">
      <div className="activite">{collaborator.service}</div>
      <img src={collaborator.photo} alt="photo de profil" />
      <div className="detail">
        <h2>
          {collaborator.firstname} {collaborator.lastname}
        </h2>
        <div className="info">
          <small>
            <span>Ville:</span> {collaborator.city}, {collaborator.country}
          </small>
          <br />
          <small>
            <span>Mail :</span> {collaborator.email}
          </small>{" "}
          <br />
          <small>
            <span>Tel :</span> {collaborator.phone}
          </small>{" "}
          <br />
          <small>
            <span>Anniversaire:</span> {collaborator.birthdate}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
