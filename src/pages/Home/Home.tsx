import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import { slides } from "../../data/slides";
import Slider from "../../components/homepage/Slider/Slider";

const StyledMainDiv = styled.div`
  width: 100%;
  background: black;
`;

const StyledHero = styled.div`
  width: 75%;
  margin-top: ${styleVar.margin}px;
  margin-bottom: ${styleVar.margin}px;
  position: relative;
`;

const Home = (): JSX.Element => {
  return (
    <StyledMainDiv className='flex-center'>
      <StyledHero className='flex-title'>
        <Slider slides={slides} />
      </StyledHero>
    </StyledMainDiv>
  );
};

export default Home;
