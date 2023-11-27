import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import { slides } from "../../data/slides";
import Slider from "../../components/homepage/Slider";

const StyledHero = styled.div`
  width: 75%;
  margin-top: ${styleVar.margin}px;
  border-radius: ${styleVar.borderRadius}px;
  position: relative;
`;

const Home = (): JSX.Element => {
  return (
    <div className='flex-center'>
      <StyledHero className='flex-title'>
        <Slider slides={slides} />
      </StyledHero>
    </div>
  );
};

export default Home;
