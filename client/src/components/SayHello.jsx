import { useState, useEffect } from "react";
import APIService from "../services/APIService";
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
    </div>
  );
}

export default SayHello;
