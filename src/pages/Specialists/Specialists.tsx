import "./Specialists.css";
import { specialists, Specialist } from "../../data/specialists";
import { Card } from "primereact/card";

const Specialists = (): JSX.Element => {
  return (
    <div>
      <h1 className='ex-title'>Box Impro</h1>;
      <h2 className='ex-subtitle'>Catégories</h2>
      <div className='ex-card-container'>
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
    </div>
  );
};

export default Specialists;
