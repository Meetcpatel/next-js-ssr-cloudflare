import { useEffect, useState } from "react";

export interface DeviceInfo {
  windowHeight: number;
  windowWidth: number;
  isExtraLargeWidth: boolean;
  isLargeWidth: boolean;
  isMediumWidth: boolean;
  isSmallWidth: boolean;
  isExtraSmallWidth: boolean;
  isLargeWidthDown: boolean;
  isMediumWidthDown: boolean;
  isSmallWidthDown: boolean;
}

export const useDeviceInfo = (): DeviceInfo => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return {
    windowHeight,
    windowWidth,
    isExtraLargeWidth: windowWidth >= 1200,
    isLargeWidth: windowWidth >= 992 && windowWidth < 1200,
    isMediumWidth: windowWidth >= 768 && windowWidth < 992,
    isSmallWidth: windowWidth >= 638 && windowWidth < 768,
    isExtraSmallWidth: windowWidth < 638,
    isLargeWidthDown: windowWidth < 1200,
    isMediumWidthDown: windowWidth < 992,
    isSmallWidthDown: windowWidth < 768,
  };
};
