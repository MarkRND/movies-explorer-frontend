import { useEffect, useState, useCallback } from "react";

const useVisibleCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateVisibleCards = useCallback(() => {
    if (windowWidth >= 1280) {
      return 12;
    } else if (windowWidth >= 768) {
      return 8;
    } else if (windowWidth >= 300) {
      return 5;
    } else {
      return 5;
    }
  }, [windowWidth]);

  const handleCardClick = () => {
    if (windowWidth >= 1280) {
      return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else if (windowWidth >= 300) {
      return 1;
    } else {
      return 0;
    }
  };

  return { calculateVisibleCards, handleCardClick };
};

export default useVisibleCards;
