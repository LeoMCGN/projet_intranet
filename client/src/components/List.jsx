import { useState } from "react";
import "./css/list.css";
import Navbar from "./navbar";

function List() {
  return (
    <div>
      <Navbar />
      <div className="list-row">
        <div className="list-container">
          <div className="activite">Marketing</div>
          <img src={`https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg`} alt="photo de profil" />
          <div className="detail">
            <h2>Léo Macaigne</h2>
            <small>Âge: 21 ans</small> <br />
            <small>Ville: Saint-Maur-des-Fossés</small> <br />
            <small>Mail : leo.macaigne@gmail.com</small> <br />
            <small>Tel : 06 95 16 86 61</small>
          </div>
          <div>
            <button className="btn-load-more">Contacter</button>
          </div>
        </div>

        <div className="list-container">
          <div className="activite">Marketing</div>
          <img src={`https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg`} alt="photo de profil" />
          <div className="detail">
            <h2>Léo Macaigne</h2>
            <small>Âge: 21 ans</small> <br />
            <small>Ville: Saint-Maur-des-Fossés</small> <br />
            <small>Mail : leo.macaigne@gmail.com</small> <br />
            <small>Tel : 06 95 16 86 61</small>
          </div>
          <div>
            <button className="btn-load-more">Contacter</button>
          </div>
        </div>

        <div className="list-container">
          <div className="activite">Marketing</div>
          <img src={`https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg`} alt="photo de profil" />
          <div className="detail">
            <h2>Léo Macaigne</h2>
            <small>Âge: 21 ans</small> <br />
            <small>Ville: Saint-Maur-des-Fossés</small> <br />
            <small>Mail : leo.macaigne@gmail.com</small> <br />
            <small>Tel : 06 95 16 86 61</small>
          </div>
          <div>
            <button className="btn-load-more">Contacter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
