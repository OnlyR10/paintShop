import { useEffect, useState } from "react";
import {
  mobileWidth,
  tabletWidth,
  desktopWidth,
  smartphoneWidth,
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
    desktop: width <= desktopWidth,
    tablet: width <= tabletWidth,
    mobile: width <= mobileWidth,
    smartphone: width <= smartphoneWidth,
  };
};
