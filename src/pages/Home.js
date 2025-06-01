// pages/Home.js
import { allImages, staticSlots, dynamicSlots } from "../utils/constants";
import useImageCycler from "../hooks/useImageCycler";
import useScale from "../hooks/useScale";
import StaticImage from "../components/StaticImage";
import DynamicImage from "../components/DynamicImage";

export default function Home() {
  const scale = useScale(1280);
  const opacities = useImageCycler(allImages, 6000);

  return (
    <>
      <div className="flex flex-row items-center justify-center relative gap-4 my-6 px-6 max-w-5xl mx-auto h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px]">
      <img
        src="/images/welcomeMessage.jpeg"
        alt="hello message"
        className="rounded-md object-contain h-full shadow-md w-auto max-w-full"
      />

      <img
        src="/images/main.jpeg"
        alt="Hudson Logo"
        className="rounded-md object-contain h-full w-auto max-w-full brightness-80 contrast-150"
      />
    </div>


      <div className="w-full flex justify-center">
        <div
          className="relative bg-white rounded-lg overflow-hidden"
          style={{
            width: `${1280 * scale}px`,
            height: `${800 * scale}px`,
            transition: "all 0.3s ease-in-out",
          }}
        >
          {staticSlots.map((slot, i) => (
            <StaticImage key={i} slot={slot} index={i} scale={scale} />
          ))}

          <DynamicImage
            slot={dynamicSlots[0]}
            images={allImages}
            opacities={opacities}
            scale={scale}
          />

          <DynamicImage
            slot={dynamicSlots[1]}
            images={allImages}
            opacities={opacities}
            scale={scale}
            offset={3}
          />

          <button
            onClick={() => (window.location.href = "/shop")}
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
              transform: "translate(-50%, -50%)",
            }}
          >
            Visit the Shop
          </button>
        </div>
      </div>
    </>
  );

  
}