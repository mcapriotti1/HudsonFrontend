// components/StaticImage.js
export default function StaticImage({ slot, index, scale }) {
  return (
    <div
      className={`${slot.style} ${slot.position} absolute overflow-hidden z-10 brightness-80 contrast-150 saturate-150`}
      style={{
        width: slot.width * scale,
        height: slot.height * scale,
      }}
    >
      <img
        src={slot.img}
        alt={`static ${index}`}
        className={`w-full h-full object-cover filter ${
          index === 2 ? "object-bottom" : ""
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/20 via-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
