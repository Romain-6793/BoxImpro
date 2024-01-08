import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 500px;
`;

const StyledP = styled.p`
  font-size: 20px;
  color: #fff;
`;

const NoResults = () => {
  return (
    <StyledDiv className='flex-title'>
      <StyledP>
        Nous sommes désolés, aucun résultat ne correspond à votre recherche...
      </StyledP>
    </StyledDiv>
  );
};

export default NoResults;
