import styled from "styled-components";
import { Exercice } from "../../data/types";
import { Specialist } from "../../data/types";

const StyledProperty = styled.span`
  text-decoration: underline;
`;

type ObjectItemProps = {
    [key: string]: Exercice | Specialist;
  };

const CardContent: React.FC<ObjectItemProps> = ( {obj} ) => {

    const getDisplayName = (key: string): string => {
        switch (key) {
          case 'title':
            return 'Titre';
          case 'type':
            return 'Type';
          case 'interest':
            return 'Intérêt';
          case 'description':
            return 'Description';
          case 'advices':
            return 'Conseils';
          case 'variants':
            return 'Variantes';
          case 'specialistType':
            return 'Type de catégorie';
          case 'improType':
            return "Type d'impro";
          case 'numberOfPlayers':
            return 'Nombre de joueurs conseillé';
          case 'duration':
            return 'Durée conseillée';
          default:
            return key;
        }
      };

// Here I am using a map method on every property of my object, to render the key-value pair I want
    
    return (
        <div>
          {Object.entries(obj).map(([key, value]) => {
            const displayName = getDisplayName(key)
            if (key !== 'id') {
              return (
                <div key={key}>
                  <StyledProperty>{displayName}</StyledProperty> : {String(value)}
                </div>
              );
            }
            return null; // Ignore "id" property
          })}
        </div>
      );
    };

export default CardContent

