// pages/Home.js
import { allImages, staticSlots, dynamicSlots } from "../utils/constants";
import useImageCycler from "../hooks/useImageCycler";
import useScale from "../hooks/useScale";
import StaticImage from "../components/StaticImage";
import DynamicImage from "../components/DynamicImage";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  const scale = useScale(1280);
  const opacities = useImageCycler(allImages, 4000);

  return (
    <>
      <div
        className="h-fit bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/homepage_design/background.png')` }}
        loading="lazy"
      >
        <div className="h-[40px] sm:h-[80px] lg:h-[120px]"></div>

        <div className="flex flex-row items-center justify-center relative gap-4 my-6 px-6 max-w-5xl mx-auto h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
          <img
            src="/images/welcomeMessage.jpeg"
            alt="hello message"
            className="rounded-md object-contain h-full shadow-md w-auto max-w-full"
            loading="lazy"
          />

          <img
            src="/images/main.jpeg"
            alt="Hudson Logo"
            className="rounded-md object-contain h-full w-auto max-w-full brightness-80 contrast-150"
            loading="lazy"
          />
        </div>

        <div className="w-full">
          <div
            className="relative bg-transparent rounded-lg overflow-hidden w-[65%] mx-auto"
            style={{
              width: `${1280 * scale}px`,
              height: `${900 * scale}px`,
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
                         hover:bg-[#8f9283] hover:scale-105 font-playfair"
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

        {/* New Socials and About Section */}
        <div className="max-w-5xl mx-auto my-10 px-6 flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          {/* Text Prompt */}
          <p className="mb-2 sm:mb-0 sm:mr-2 text-main font-playfair text-gray-700">
            Connect with our socials:
          </p>

          {/* Socials */}
          <div className="flex space-x-4 text-black">
            <a
              href="https://www.facebook.com/hudsondesignhouseoswego/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook size={36} />
            </a>
            <a
              href="https://www.instagram.com/hudsondesignhouse/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={36} />
            </a>
          </div>

          {/* About Page Link */}
          <button
            onClick={() => (window.location.href = "/about")}
            className="rounded-md bg-black px-10 py-2 font-semibold text-white shadow-md hover:bg-button transition"
          >
            About Us
          </button>
        </div>
      </div>
    </>
  );
}
