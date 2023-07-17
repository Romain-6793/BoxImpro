import styled from "styled-components";
import { Exercice } from "../../data/types";
import { Specialist } from "../../data/types";

const StyledProperty = styled.span`
  text-decoration: underline;
`;

type ObjectItemProps = {
  [key: string]: Exercice | Specialist;
};

const CardContent: React.FC<ObjectItemProps> = ({ obj }) => {
  const getDisplayName = (key: string): string => {
    const obj: { [key: string]: string } = {
      title: "Titre",
      type: "Type",
      interest: "Intérêt",
      description: "Description",
      advices: "Conseils",
      variants: "Variantes",
      specialistType: "Type de catégorie",
      improType: "Type d'impro",
      numberOfPlayers: "Nombre de joueurs conseillé",
      duration: "Durée conseillée",
    };

    return obj[key];
  };

  // Here I am using a map method on every property of my object, to render the key-value pair I want

  return (
    <div>
      {Object.entries(obj)
        .filter(([key]) => key !== "id")
        .map(([key, value]) => {
          const displayName = getDisplayName(key);
          return (
            <div key={key}>
              <StyledProperty>{displayName}</StyledProperty> : {String(value)}
            </div>
          );
        })}
    </div>
  );
};

export default CardContent;
