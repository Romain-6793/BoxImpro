import styled from "styled-components";
import { ObjectItemProps } from "../../../../../../data/types";
import { getDisplayName } from "../../../../../../utils/functions/getDisplayName";

const StyledDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
  font-size: 20px;
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StyledProperty = styled.p`
  text-decoration: underline;
  margin-right: 150px;
`;

// Below, my "obj" prop is a result of what I pass in data prop => see Cards.tsx

const CardContent: React.FC<ObjectItemProps> = ({ obj }) => {
  // Below I am using a map method on every property of my object, to render the key-value pair I want.
  // I return every key-value pair except the "id" and the "tags" that is why there is a filter
  // before the map. I also use Object.entries to access every pair on every object of my data.

  return (
    <StyledDiv>
      {Object.entries(obj)
        .filter(
          ([key]) =>
            key !== "id" && key !== "tags" && key !== "likes" && key !== "title"
        )
        .map(([key, value]) => {
          const displayName = getDisplayName(key);
          return (
            <div key={key}>
              <StyledProperty>{displayName}</StyledProperty> {String(value)}
            </div>
          );
        })}
    </StyledDiv>
  );
};

export default CardContent;
