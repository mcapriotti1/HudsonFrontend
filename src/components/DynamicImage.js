// components/DynamicImage.js
export default function DynamicImage({ slot, images, opacities, offset = 0, scale, fadeDuration = 1000 }) {
  return (
    <div
      className={`${slot.style} ${slot.position} absolute overflow-hidden z-0`}
      style={{
        width: slot.width * scale,
        height: slot.height * scale,
        position: "relative",
      }}
    >
      {images.map((img, i) => (
        <img
          key={`${img}-${i}`}
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
            opacity: opacities[(i + offset) % images.length],
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
