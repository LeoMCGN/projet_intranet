import React, { useState } from "react";
import "./css/form.css";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div>
      <section>
        <div className="title title-span">
          <h1>
            Intranet
            <span>Bienvenue sur la page de connexion</span>
          </h1>
        </div>
      </section>

      <section className="container">
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="Nom" />
              <input type="password" placeholder="Mot de passe" />
              <input type="email" placeholder="Email" />
              <button>Créer</button>
              <p className="message">
                Déjà un compte ? <a href="#">Connecter vous.</a>
              </p>
            </form>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mot de passe" className="input2" />
              <Link to={`/sayhello/`} className="btn">
                Se connecter
              </Link>
              <p className="message">
                Pas de compte? <span>Demander vos accès à la secrétaire.</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
