import React, { useState } from "react";
import "./css/login.css";
import Navbar from "./navbar";

async function LoginUser(connexion) {
  let response = await fetch("http://localhost:7001/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(connexion),
  });

  if (response.status == 200) {
    let data = await response.json();
    console.log(data.token);
    localStorage.setItem("token", data.token);
  }
}

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    const data = await LoginUser({
      email: username,
      password: password,
    });
    window.location = "/sayhello";
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="title title-span">
          <h1>
            Intranet Fruiteo
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
            <form onSubmit={submit} className="login-form">
              <input type="email" onChange={(e) => setUserName(e.target.value)} placeholder="Email" />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" className="input2" />
              <button type="submit" className="btn">
                Se connecter
              </button>
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

export default Login;
