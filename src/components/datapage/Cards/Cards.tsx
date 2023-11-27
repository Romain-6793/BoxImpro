import "primeicons/primeicons.css";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import styleVar from "../../../utils/style/style-variables";
import colors from "../../../utils/style/colors";
import useUrl from "../../../utils/hooks/useUrl";
import { Card } from "primereact/card";
import { Exercice, Specialist, CardsProps } from "../../../data/types";
import CardContent from "../CardContent/CardContent";
import {
  increaseExercicesLikes,
  increaseSpecialistsLikes,
} from "../../../slices/dataSlice";

const StyledMain = styled.main`
  margin-top: ${styleVar.margin}px;
  .p-card {
    font-family: ${styleVar.fontFamily};
    width: 75%;
    background: ${colors.tertiary};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    margin-bottom: 20px;
    position: relative;
  }
  .p-card-title {
    font-weight: normal;
    background: ${colors.primary};
    text-align: center;
    color: ${colors.white};
    border-radius: ${styleVar.borderRadius}px;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  &:hover {
    border: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &:visited {
    border: none;
  }
  &:hover .hearticon {
    font-size: 20px;
  }
`;

const StyledSpan = styled.span`
  margin-top: 5px;
  margin-left: 5px;
`;

// In the return of my component a data item can be either of type Exercice or Specialist.
// I pass the item in the obj prop of my CardContent.

const Cards: React.FC<CardsProps> = ({ data }) => {
  const dispatch = useDispatch();
  const currentURL = useUrl();

  //externalize handleLikesClick

  const handleLikesClick = (itemId: number) => {
    currentURL.includes("exercices")
      ? dispatch(increaseExercicesLikes(itemId))
      : dispatch(increaseSpecialistsLikes(itemId));
  };

  return (
    <StyledMain className='flex-column'>
      {data &&
        data.map((item: Exercice | Specialist) => (
          <Card title={item.title} key={item.id}>
            <CardContent obj={item} />
            <div className='flex-end'>
              <StyledSpan>{item.likes}</StyledSpan>
              <StyledButton
                onClick={() => handleLikesClick(item.id)}
                data-testid={`like-button-${item.id}`}
              >
                <i
                  className='pi pi-heart-fill hearticon'
                  style={{ color: "#ff7417" }}
                ></i>
              </StyledButton>
            </div>
          </Card>
        ))}
    </StyledMain>
  );
};

export default Cards;
