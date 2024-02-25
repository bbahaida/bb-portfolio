import { useEffect, useState } from "react";

// Custom hook for determining screen size
export const useScreenSize = () => {
  const [screen, setScreen] = useState(() => {
    const width = window.innerWidth;
    return width < 576
      ? "xs"
      : width < 768
      ? "sm"
      : width < 992
      ? "md"
      : width < 1200
      ? "lg"
      : "xl";
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreen(
        width < 576
          ? "xs"
          : width < 768
          ? "sm"
          : width < 992
          ? "md"
          : width < 1200
          ? "lg"
          : "xl"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screen };
};
