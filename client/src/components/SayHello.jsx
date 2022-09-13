import { useState } from "react";
import "./css/sayhello.css";
import Navbar from "./navbar";

function SayHello() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="md-ui component-card" data-material-ui-component="card">
          <figure className="md-ui card-figure">
            <img src={"https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg"} alt="photo de profil" className="figure-photo" />
            <figcaption className="figure-caption">
              <h1 className="title">Léo Macaigne</h1>
              <h2 className="subtitle">21 ans - Saint-Maur-des-Fossés, France</h2>
              <div className="action-menu">
                <input type="button" className="btn explore" value="leo.macaigne@gmail.com" />
              </div>
              <p className="bio">
                Mount Everest, also known in Nepal as Sagarmāthā and in Tibet as Chomolungma, is Earth's highest mountain. It is located in the Mahalangur mountain range in Nepal and Tibet. Its peak
                is 8,848 metres (29,029 ft) above sea level. The international border between China (Tibet Autonomous Region) and Nepal runs across Everest's precise summit point.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SayHello;
