import { useState, useEffect } from "react";
import APIService from "../services/APIService";
import "./css/sayhello.css";
import Navbar from "./navbar";
import Card from "./Card";

function SayHello() {
  const [randomCollaborator, setRandomCollaborator] = useState(null);

  const getRandom = async () => {
    const data = await APIService.getRandomCollaborator();

    setRandomCollaborator(data);
  };

  useEffect(() => {
    getRandom();
  }, []);
  return (
    <div>
      <Navbar />
      {randomCollaborator && <Card collaborator={randomCollaborator} />}
      <div className="btn-center">
        <button className="btn-random" onClick={getRandom}>
          Dire bonjour à quelqu'un d'autre
        </button>
      </div>
    </div>
  );
}

export default SayHello;
