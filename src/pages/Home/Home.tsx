import BoxImproBg from "../../assets/boximpro-background.png";
import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";

const StyledHero = styled.div`
  width: 75%;
  margin-top: ${styleVar.margin}px;
  border-radius: ${styleVar.borderRadius}px;
  position: relative;
`;

const StyledTitleDiv = styled.div`
  position: absolute;
  left: 5%;
  color: orange;
  text-align: center;
  @media (max-width: 2000px) {
    left: 10%;
  }
  @media (max-width: 1801px) {
    left: 5%;
  }
  @media (max-width: 1276px) {
    left: 3%;
  }
  @media (max-width: 975px) {
    top: 5%;
    left: 15%;
  }
  @media (max-width: 851px) {
    left: 10%;
  }
  @media (max-width: 766px) {
    left: 15%;
  }
  @media (max-width: 621px) {
    left: 10%;
  }
  @media (max-width: 550px) {
    left: 5%;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${styleVar.titleFontFamily};
  @media (max-width: 1651px) {
    font-size: 46px;
  }
  @media (max-width: 1451px) {
    font-size: 42px;
  }
  @media (max-width: 1351px) {
    font-size: 40px;
  }
  @media (max-width: 975px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const StyledSubTitle = styled.h2`
  @media (max-width: 975px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
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
          <StyledSubTitle>
            Des dizaines d'exercices et de catégories à votre disposition.
          </StyledSubTitle>
        </StyledTitleDiv>
        <StyledBackground src={BoxImproBg} />
      </StyledHero>
    </div>
  );
};

export default Home;
