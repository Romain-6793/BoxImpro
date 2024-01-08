import { useState } from "react";
import styled from "styled-components";
import styleVar from "../../../utils/style/style-variables";
import { Link } from "react-router-dom";
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

const StyledFlexDiv2 = styled.div`
  width: 100%;
  position: absolute;
  bottom: 200px;
  .p-button {
    color: #fff;
    margin-right: 10px;
  }
`;

const DesktopSlider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
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
        <StyledFlexDiv className='flex-column'>
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
        <StyledFlexDiv2 className='flex-center'>
          {slides[currentIndex] &&
            slides[currentIndex].links.map((item) => (
              <Link to={item.direction} key={`${item}-${item.direction}`}>
                <Button label={item.label} />
              </Link>
            ))}
        </StyledFlexDiv2>
      </StyledSlider>
    </div>
  );
};

export default DesktopSlider;
