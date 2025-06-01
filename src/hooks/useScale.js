// hooks/useScale.js
import { useEffect, useState } from "react";

export default function useScale(baseWidth = 1280) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const newScale = Math.min(1, screenWidth / baseWidth);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [baseWidth]);

  return scale;
}
