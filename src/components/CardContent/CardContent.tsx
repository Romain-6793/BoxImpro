import styled from "styled-components";
import { ObjectItemProps } from "../../data/types";

const StyledProperty = styled.span`
  text-decoration: underline;
`;

// Below, my "obj" prop is a result of what I pass in data prop => see Cards.tsx

const CardContent: React.FC<ObjectItemProps> = ({ obj }) => {
  // getDisplayName is a function that returns the keys of an object. The object purpose is to list the keys
  // of every type of data object (exercice or specialist).

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

  // Below I am using a map method on every property of my object, to render the key-value pair I want.
  // I return every key-value pair except the "id" and the "tags" that is why there is a filter
  // before the map. I also use Object.entries to access every pair on every object of my data.

  return (
    <div>
      {Object.entries(obj)
        .filter(([key]) => key !== "id" && key !== "tags" && key !== "likes")
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
