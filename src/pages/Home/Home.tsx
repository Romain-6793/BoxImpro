import BoxImproBg from "../../assets/boximpro-background.png";
import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";

const StyledHero = styled.div`
  width: 75%;
  margin-top: ${styleVar.marginTop}px;
  border-radius: ${styleVar.borderRadius}px;
  position: relative;
`;

const StyledTitleDiv = styled.div`
  position: absolute;
  left: 5%;
  color: orange;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-family: ${styleVar.titleFontFamily};
`;

const StyledBackground = styled.img`
  width: ${styleVar.widthFull}%;
  height: ${styleVar.heightFull}%;
  border-radius: ${styleVar.borderRadius}px;
`;

const Home = (): JSX.Element => {
  return (
    <div className='flex-center'>
      <StyledHero className='flex-title'>
        <StyledTitleDiv>
          <StyledTitle>
            Ouvrez la boîte à idées de l'improvisateur !
          </StyledTitle>
          <h2>
            Des dizaines d'exercices et de catégories à votre disposition.
          </h2>
        </StyledTitleDiv>
        <StyledBackground src={BoxImproBg} />
      </StyledHero>
    </div>
  );
};

export default Home;
