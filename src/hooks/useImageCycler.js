// hooks/useImageCycler.js
import { useEffect, useState } from "react";

export default function useImageCycler(images, displayDuration = 4000) {
  const [opacities, setOpacities] = useState(
    images.map((_, i) => (i === 0 ? 1 : 0))
  );

  useEffect(() => {
    let currentIndex = 0;
    const total = images.length;

    const interval = setInterval(() => {
      setOpacities((prev) => {
        const newOpacities = prev.map(() => 0);
        newOpacities[(currentIndex + 1) % total] = 1;
        return newOpacities;
      });
      currentIndex = (currentIndex + 1) % total;
    }, displayDuration);

    return () => clearInterval(interval);
  }, [images, displayDuration]);

  return opacities;
}
