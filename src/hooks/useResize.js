import { useEffect, useState } from "react";
import {
  desktopWidth,
  extraWidth,
  laptopWidth,
  mobileWidth,
  smartphoneWidth,
  tabletWidth,
} from "../config/breakpoints";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    extra: width <= extraWidth,
    desktop: width <= desktopWidth,
    laptop: width <= laptopWidth,
    tablet: width <= tabletWidth,
    mobile: width <= mobileWidth,
    smartphone: width <= smartphoneWidth,
  };
};
