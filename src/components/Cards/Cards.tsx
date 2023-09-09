import styled from "styled-components"
import styleVar from "../../utils/style/style-variables";
import colors from "../../utils/style/colors";
import { Card } from "primereact/card";
import { Exercice, Specialist, CardsProps } from "../../data/types";
import CardContent from "../CardContent/CardContent";

const StyledMain = styled.main`
  margin-top: ${styleVar.marginTop}px;
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

const Cards: React.FC<CardsProps> = ( {data} ) => {
    return (
        <StyledMain className="flex-column">
       {data &&
        data.map((item: Exercice | Specialist) => (
          <Card title={item.title} key={item.id}>
            <CardContent obj={item} />
          </Card>
        ))}
        
        </StyledMain>

    ) 
}

export default Cards