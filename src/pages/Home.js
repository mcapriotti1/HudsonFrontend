import { useEffect, useState } from "react";

const allImages = [
  "/images/homepage_design/img1.jpeg",
  "/images/homepage_design/img3.jpeg",
  "/images/homepage_design/img4.jpeg",
  "/images/homepage_design/img5.jpeg",
  "/images/homepage_design/img6.jpeg",
  "/images/homepage_design/img7.jpeg",
  "/images/homepage_design/img8.jpeg",
  "/images/homepage_design/img10.jpeg",
  "/images/homepage_design/img11.jpeg",
];

const staticSlots = [
  {
    width: 400,
    height: 550,
    style: "rounded-xl shadow-lg z-10",
    position: "absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2",
    img: "/images/homepage_design/main.jpeg",
  },
  {
    width: 400,
    height: 350,
    style: "rounded-xl shadow-md",
    position: "absolute left-[2%] top-[10%]",
    img: "/images/homepage_design/static1.jpeg",
  },
  {
    width: 815,
    height: 185,
    style: "rounded-xl shadow-md",
    position: "absolute bottom-[1%] right-[2%]",
    img: "/images/homepage_design/static2.jpeg",
  },
];

const dynamicSlots = [
  {
    width: 400,
    height: 400,
    style: "rounded-xl shadow-md",
    position: "absolute top-[24%] left-[66.7%]",
  },
  {
    width: 350,
    height: 347,
    style: "rounded-xl shadow-md",
    position: "absolute bottom-[-5.5%] left-[6%]",
  },
];



export default function Home() {
  const FADE_DURATION = 1000;
  const DISPLAY_DURATION = 6000;

  const [opacities, setOpacities] = useState(
    allImages.map((_, i) => (i === 0 ? 1 : 0))
  );

  const [scale, setScale] = useState(1);

  useEffect(() => {
    let currentIndex = 0;
    const total = allImages.length;

    const interval = setInterval(() => {
      setOpacities((prev) => {
        const newOpacities = prev.map(() => 0);
        newOpacities[(currentIndex + 1) % total] = 1;
        return newOpacities;
      });
      currentIndex = (currentIndex + 1) % total;
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const baseWidth = 1280;
      const screenWidth = window.innerWidth;
      const newScale = Math.min(1, screenWidth / baseWidth);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-10">
        Welcome to Hudson Design House
      </h1>

      <div className="w-full flex justify-center">
        <div
          className="relative bg-white rounded-lg overflow-hidden"
          style={{
    width: `${1280 * scale}px`,
    height: `${800 * scale}px`,
    transition: "all 0.3s ease-in-out",
  }}
        >
          {/* Static Images */}
          {staticSlots.map((slot, i) => (
  <div
    key={`static-${i}`}
    className={`${slot.style} ${slot.position} absolute overflow-hidden z-10 brightness-80 contrast-150 saturate-150`}
    style={{
      width: slot.width * scale,
      height: slot.height * scale,
    }}
  >
    <img
      src={slot.img}
      alt={`static ${i}`}
      className={`w-full h-full object-cover filter ${
        i === 2 ? "object-bottom" : ""
      }`}
      loading="lazy"
    />
    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/20 via-white/10 to-transparent pointer-events-none" />
  </div>
))}

{/* Dynamic image 1 */}
<div
  className={`${dynamicSlots[0].style} ${dynamicSlots[0].position} absolute overflow-hidden z-0`}
  style={{
    width: dynamicSlots[0].width * scale,
    height: dynamicSlots[0].height * scale,
    position: "relative",
  }}
>
  {allImages.map((img, i) => (
    <img
      key={`cycling-${i}`}
      src={img}
      alt={`cycling ${i}`}
      loading="lazy"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(80%) contrast(130%) saturate(150%)",
        opacity: opacities[i],
        transition: `opacity ${FADE_DURATION}ms ease-in-out`,
      }}
    />
  ))}
</div>

{/* Dynamic image 2 */}
<div
  className={`${dynamicSlots[1].style} ${dynamicSlots[1].position} absolute overflow-hidden z-0`}
  style={{
    width: dynamicSlots[1].width * scale,
    height: dynamicSlots[1].height * scale,
    position: "relative",
  }}
>
  {allImages.map((img, i) => (
    <img
      key={`cycling2-${i}`}
      src={img}
      alt={`cycling2 ${i}`}
      loading="lazy"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(80%) contrast(130%) saturate(150%)",
        opacity: opacities[(i + 3) % allImages.length],
        transition: `opacity ${FADE_DURATION}ms ease-in-out`,
      }}
    />
  ))}
</div>
<button
  onClick={() => window.location.href = "/shop"}
  className="absolute cursor-pointer rounded-md text-white z-20 whitespace-nowrap
             bg-[#000000]
             shadow-lg
             transition duration-300 ease-in-out
             hover:bg-[#6c6f66] hover:scale-105 font-playfair"
  style={{
  left: `${1050 * scale}px`,
  top: `${140 * scale}px`,
  fontSize: `${25 * scale}px`,
  padding: `${8 * scale}px ${80 * scale}px`,
  transform: "translate(-50%, -50%)",  // only position centering
}}
>
  Visit the Shop
</button>
        </div>
      </div>
    </>
  );
}
