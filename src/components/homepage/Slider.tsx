import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import colors from "../../utils/style/colors";
import leftArrow from "../../assets/vector-left.svg";
import rightArrow from "../../assets/vector-right.svg";
import BoxImproBg from "../../assets/boximpro-background.png";
import { useState } from "react";
import { SliderProps } from "../../data/types";

const StyledSlider = styled.div`
  position: relative;
`;

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

const StyledTitleDiv2 = styled.div`
  position: absolute;
  color: orange;
  left: 10%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  @media (max-width: 975px) {
    top: 5%;
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

const StyledTextBox = styled.div`
  background: purple;
  border-radius: 5px;
  position: absolute;
  width: 75%;
  color: #fff;
  padding: 8px;
  @media (min-width: 1010px) {
    bottom: 200px;
  }
  @media (max-width: 1010px) {
    bottom: 100px;
  }
  @media (max-width: 767px) {
    position: static;
    width: 100%;
  }
`;

const StyledText = styled.p`
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 1010px) {
    font-size: 12px;
  }
`;

const StyledBackground = styled.img`
  width: ${styleVar.widthFull}%;
  height: ${styleVar.heightFull}%;
  border-radius: ${styleVar.borderRadius}px;
  z-index: 1;
`;

const StyledLeftBtn = styled.button`
  width: 60px;
  height: 90px;
  position: absolute;
  top: 300px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  left: 23.36px;
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
  @media (max-width: 525px) {
    top: 200px;
  }
  @media (max-width: 375px) {
    top: 150px;
  }
`;

const StyledRightBtn = styled.button`
  width: 60px;
  height: 90px;
  position: absolute;
  top: 300px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  right: 23.36px;
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
  @media (max-width: 526px) {
    top: 200px;
  }
  @media (max-width: 375px) {
    top: 150px;
  }
`;

const StyledCounter = styled.span`
  position: absolute;
  top: 85%;
  left: 47.5%;
  z-index: 2;
  color: #ffffff;
`;

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [isSmall, setIsSmall] = useState({
    matches: window.matchMedia("(max-width: 767px)").matches,
  });

  function screenListener() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => setIsSmall({ matches: e.matches });
    window.matchMedia("(max-width: 767px)").addEventListener("change", handler);
  }

  screenListener();

  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstSlide = currentIndex === 0;

  const goToPrev = () => {
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return isSmall.matches ? (
    <div>
      <StyledSlider>
        {isFirstSlide ? (
          <StyledTitleDiv>
            <StyledTitle>{slides[currentIndex].title}</StyledTitle>
            <StyledSubTitle>{slides[currentIndex].subtitle}</StyledSubTitle>
          </StyledTitleDiv>
        ) : (
          <StyledTitleDiv2>
            <StyledTitle>{slides[currentIndex].title}</StyledTitle>
            <StyledSubTitle>{slides[currentIndex].subtitle}</StyledSubTitle>
          </StyledTitleDiv2>
        )}
        <StyledBackground src={BoxImproBg} />
        <StyledLeftBtn onClick={goToPrev}>
          <img
            src={leftArrow}
            alt='aller à la slide précédente'
            className='arrow'
          ></img>
        </StyledLeftBtn>
        <StyledRightBtn onClick={goToNext}>
          <img
            src={rightArrow}
            alt='aller à la slide suivante'
            className='arrow'
          ></img>
        </StyledRightBtn>
        <StyledCounter>
          {currentIndex + 1}/{slides.length}
        </StyledCounter>
      </StyledSlider>
      <StyledTextBox>
        <StyledText>{slides[currentIndex].text}</StyledText>
      </StyledTextBox>
    </div>
  ) : (
    <div>
      <StyledSlider>
        {isFirstSlide ? (
          <StyledTitleDiv>
            <StyledTitle>{slides[currentIndex].title}</StyledTitle>
            <StyledSubTitle>{slides[currentIndex].subtitle}</StyledSubTitle>
          </StyledTitleDiv>
        ) : (
          <StyledTitleDiv2>
            <StyledTitle>{slides[currentIndex].title}</StyledTitle>
            <StyledSubTitle>{slides[currentIndex].subtitle}</StyledSubTitle>
          </StyledTitleDiv2>
        )}
        <div className='flex-center'>
          <StyledTextBox>
            <StyledText>{slides[currentIndex].text}</StyledText>
          </StyledTextBox>
        </div>
        <StyledBackground src={BoxImproBg} />
        <StyledLeftBtn onClick={goToPrev}>
          <img
            src={leftArrow}
            alt='aller à la slide précédente'
            className='arrow'
          ></img>
        </StyledLeftBtn>
        <StyledRightBtn onClick={goToNext}>
          <img
            src={rightArrow}
            alt='aller à la slide suivante'
            className='arrow'
          ></img>
        </StyledRightBtn>
        <StyledCounter>
          {currentIndex + 1}/{slides.length}
        </StyledCounter>
      </StyledSlider>
    </div>
  );
};

export default Slider;
