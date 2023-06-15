import "./CardContainer.css";
import { Card } from "primereact/card";
import { useState, useEffect } from "react";
import { Exercice, Specialist } from "../../data/types";
import { specialists } from "../../data/specialists";
import { exercices } from "../../data/exercices";

const CardContainer = () => {
  const [currentURL, setCurrentURL] = useState(window.location.href);

  useEffect(() => {
    const handleURLChange = () => {
      setCurrentURL(window.location.href);
    };

    // Adds an event listener to detect URL changes
    window.addEventListener("popstate", handleURLChange);

    // Removes the event listener when the component dismounts
    return () => {
      window.removeEventListener("popstate", handleURLChange);
    };
  }, []);

  return currentURL.includes("exercices") ? (
    <div className='flex-column'>
      {exercices &&
        exercices.map((index: Exercice) => (
          <Card title={index.title} key={index.id}>
            <p>Type d'impro: {index.type}</p>
            <p>Intérêt : {index.interest}</p>
            <p>Description : {index.description}</p>
            <p>Conseils: {index.advices}</p>
            <p>Variantes : {index.variants}</p>
          </Card>
        ))}
    </div>
  ) : (
    <div className='flex-column'>
      {specialists &&
        specialists.map((index: Specialist) => (
          <Card title={index.title} key={index.id}>
            <p>Type de catégorie: {index.specialistType}</p>
            <p>Type d'impro conseillé : {index.improType}</p>
            <p>Nombre de joueurs conseillé : {index.numberOfPlayers}</p>
            <p>Durée conseillée: {index.duration}</p>
            <p>Description : {index.description}</p>
          </Card>
        ))}
    </div>
  );
};

export default CardContainer;
