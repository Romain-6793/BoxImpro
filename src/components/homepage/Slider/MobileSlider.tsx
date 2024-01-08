import { useState } from "react";
import styled from "styled-components";
import styleVar from "../../../utils/style/style-variables";
import FirstSlideContent from "./FirstSlideContent";
import SlideContent from "./SlideContent";
import leftArrow from "../../../assets/vector-left.svg";
import rightArrow from "../../../assets/vector-right.svg";
import BoxImproBg from "../../../assets/boximpro-background.png";
import { SliderProps } from "../../../data/types";

const StyledSlider = styled.div`
  position: relative;
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

const MobileSlider: React.FC<SliderProps> = ({ slides }) => {
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

  return (
    <div>
      <StyledSlider>
        {isFirstSlide ? (
          <FirstSlideContent currentSlide={slides[currentIndex]} />
        ) : (
          <SlideContent currentSlide={slides[currentIndex]} />
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
  );
};

export default MobileSlider;
