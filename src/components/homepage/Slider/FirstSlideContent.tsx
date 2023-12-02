import styled from "styled-components";
import styleVar from "../../../utils/style/style-variables";
import colors from "../../../utils/style/colors";
import { SliderComponentProps } from "../../../data/types";

const StyledTitleDiv = styled.div`
  position: absolute;
  left: 5%;
  color: orange;
  text-align: center;
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
  color: ${colors.white};
  font-weight: bolder;
  @media (max-width: 975px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const FirstSlideContent: React.FC<SliderComponentProps> = ({
  currentSlide,
}) => {
  return (
    <StyledTitleDiv>
      <StyledTitle>{currentSlide.title}</StyledTitle>
      <StyledSubTitle>{currentSlide.subtitle}</StyledSubTitle>
    </StyledTitleDiv>
  );
};

export default FirstSlideContent;
