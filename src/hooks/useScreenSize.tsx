import { useEffect, useState } from "react";

// Utility function to debounce any function with TypeScript
function debounce(
  fn: (...args: any[]) => void,
  ms: number
): (...args: any[]) => void {
  let timer: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, ms);
  };
}

// TypeScript type for screen sizes
type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

// Custom hook for determining screen size with debouncing, in TypeScript
export const useScreenSize = (): { screen: ScreenSize } => {
  const [screen, setScreen] = useState<ScreenSize>(() => {
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
    const handleResize = debounce(() => {
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
    }, 250); // Adjust debounce time as needed

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screen };
};
