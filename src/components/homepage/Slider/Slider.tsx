import { useState } from "react";
import { SliderProps } from "../../../data/types";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";

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

  return isSmall.matches ? (
    <MobileSlider slides={slides} />
  ) : (
    <DesktopSlider slides={slides} />
  );
};

export default Slider;
