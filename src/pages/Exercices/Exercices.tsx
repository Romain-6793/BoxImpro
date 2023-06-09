import "./Exercices.css";
import { exercices, Exercice } from "../../data/exercices";
import { Card } from "primereact/card";

const Exercices = (): JSX.Element => {
  return (
    <div>
      <h1 className='ex-title'>Box Impro</h1>;
      <h2 className='ex-subtitle'>Exercices</h2>
      <div className='ex-card-container'>
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
    </div>
  );
};

export default Exercices;
