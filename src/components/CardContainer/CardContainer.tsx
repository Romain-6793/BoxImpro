import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import colors from "../../utils/style/colors";
import { Card } from "primereact/card";
import { useState, useEffect } from "react";
import { Exercice, Specialist } from "../../data/types";
import { specialists } from "../../data/specialists";
import { exercices } from "../../data/exercices";

const StyledDiv = styled.div`
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

const StyledProperty = styled.span`
  text-decoration: underline;
`;

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
    <StyledDiv className='flex-column'>
      {exercices &&
        exercices.map((index: Exercice) => (
          <Card title={index.title} key={index.id}>
            <p>
              <StyledProperty>Type d'impro</StyledProperty> : {index.type}
            </p>
            <p>
              <StyledProperty>Intérêt</StyledProperty> : {index.interest}
            </p>
            <p>
              <StyledProperty>Description</StyledProperty> : {index.description}
            </p>
            <p>
              <StyledProperty>Conseils</StyledProperty> : {index.advices}
            </p>
            <p>
              <StyledProperty>Variantes</StyledProperty> : {index.variants}
            </p>
          </Card>
        ))}
    </StyledDiv>
  ) : (
    <StyledDiv className='flex-column'>
      {specialists &&
        specialists.map((index: Specialist) => (
          <Card title={index.title} key={index.id}>
            <p>
              <StyledProperty>Type de catégorie</StyledProperty> :{" "}
              {index.specialistType}
            </p>
            <p>
              <StyledProperty>Type d'impro conseillé</StyledProperty> :{" "}
              {index.improType}
            </p>
            <p>
              <StyledProperty>Nombre de joueurs conseillé</StyledProperty> :{" "}
              {index.numberOfPlayers}
            </p>
            <p>
              <StyledProperty>Durée conseillée</StyledProperty> :{" "}
              {index.duration}
            </p>
            <p>
              <StyledProperty>Description</StyledProperty> : {index.description}
            </p>
          </Card>
        ))}
    </StyledDiv>
  );
};

export default CardContainer;
