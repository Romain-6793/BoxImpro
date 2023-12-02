import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styleVar from "../../../utils/style/style-variables";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
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

const StyledFlexDiv = styled.div`
  width: 100%;
  position: absolute;
  bottom: 300px;
  .p-button {
    color: #fff;
    margin-right: 10px;
  }
`;

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [isSmall, setIsSmall] = useState({
    matches: window.matchMedia("(max-width: 767px)").matches,
  });

  const [visible, setVisible] = useState(false);

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
  ) : (
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
        <StyledFlexDiv className='flex-center'>
          {slides[currentIndex] &&
            slides[currentIndex].links.map((item) => (
              <Link to={item.direction} key={`${item}-${item.direction}`}>
                <Button label={item.label} />
              </Link>
            ))}
          <Button label='En savoir plus !' onClick={() => setVisible(true)} />
          <Dialog
            header={slides[currentIndex].title}
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            {slides[currentIndex].text}
          </Dialog>
        </StyledFlexDiv>
      </StyledSlider>
    </div>
  );
};

export default Slider;
