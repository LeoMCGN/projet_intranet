import { useState } from "react";
import Navbar from "./navbar";
import "./css/modificationprofil.css";

/*
  async function Modification(connexion) {
    let response = await fetch(`http://localhost:7001/api/collaborateurs/`, {
      method: "PUT",
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
*/

function ModificationProfil() {
  /* const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    const data = await Modification({
      email: username,
      password: password,
    });
    window.location = "/list";
  };*/
  return (
    <div>
      <Navbar />
      <div className="profil-container">
        <h1>Modifier mon profil</h1>
        <form className="profil-form" /* onSubmit={submit} */>
          <select name="civilite">
            <option value="civilite">Civilité</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <select name="categorie">
            <option value="Categorie">Catégorie</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Technique</option>
            <option value="Developpeur">Client</option>
          </select>
          <input type="text" placeholder="Nom" /* onChange={(e) => setUserName(e.target.value)} */ />
          <input type="text" placeholder="Prénom" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Confirmation mot de passe" />
          <input type="tel" placeholder="Telephone" />
          <input type="date" placeholder="Date de naissance" />
          <input type="text" placeholder="Ville" />
          <input type="text" placeholder="Pays" />
          <input type="text" placeholder="URL de votre photo de profil" />
          <button type="submit" className="btn-profil">
            Modifier
          </button>
          <p className="message">
            Merci de vérifier vos informations <span className="message-span"> avant de modifier votre profil.</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModificationProfil;
