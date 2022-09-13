import React, { useState } from "react";
import "./form.css";

function Form() {
  return (
    <div>
      <section>
        <div className="two alt-two">
          <h1>
            Intranet
            <span>Bienvenue sur la page de connexion</span>
          </h1>
        </div>
      </section>

      <section className="container">
        <div class="login-page">
          <div class="form">
            <form class="register-form">
              <input type="text" placeholder="Nom" />
              <input type="password" placeholder="Mot de passe" />
              <input type="email" placeholder="Email" />
              <button>Créer</button>
              <p class="message">
                Déjà un compte ? <a href="#">Connecter vous.</a>
              </p>
            </form>
            <form class="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mot de passe" />
              <button type="submit">Se connecter</button>
              <p class="message">
                Pas de compte? <a href="#">Demander vos accès à la secrétaire.</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
