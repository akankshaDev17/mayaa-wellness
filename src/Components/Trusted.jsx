// src/components/Trusted.jsx
import React from "react";
import img1 from "../assets/LPU.webp";
import img2 from "../assets/SVIT.webp";
import img3 from "../assets/CGC.webp";
import img4 from "../assets/CU.webp";
import img5 from "../assets/GJIMT.webp";
import img6 from "../assets/GD_GOENKA.jpg";

const Trusted = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      className="
        pt-[56px] md:pt-[110px]
        pb-6 md:pb-12
        mt-6 sm:mt-8 md:mt-0
        bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]
      "
    >
      {/* Mobile-only absolute frame (unchanged) */}
      <div
        className="block md:hidden absolute"
        style={{
          width: "348px",
          height: "81px",
          top: "177px",
          left: "-109px",
          opacity: 1,
          transform: "rotate(0deg)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-8xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2
            className="
              text-[#09384D] font-juanaMedium font-medium
              text-sm sm:text-base md:text-[20px]
              md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]
            "
          >
            Trusted by Top Universities And Colleges
          </h2>
        </div>

        {/* Desktop: single-row infinite marquee */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            {/* 200% width strip: 6 logos + duplicate 6 logos */}
            <div className="flex items-center trusted-animate-right w-[200%]">
              {[...images, ...images].map((src, i) => (
                <div key={`d-${i}`}>
                <img
                  src={src}
                  alt={`Brand ${i % 6 + 1}`}
                  className={[
    "object-fill mx-12",
    // base sizes by index (desktop baseline)
    i % 6 === 0 ? "w-[215px] h-[101px]" :
    i % 6 === 1 ? "w-[205px] h-[43px]"  :
    i % 6 === 2 ? "w-[185px] h-[62px]"  :
    i % 6 === 3 ? "w-[163px] h-[59px]"  :
    i % 6 === 4 ? "w-[160px] h-[62px]"  :
                  // "w-[240px] h-[59px]",
    // ensure grayscale
    i % 6 === 5 ? "grayscale" : "",
    // IMPORTANT: put the responsive override LAST so it wins
    i % 6 === 5 ? "w-[114px] h-[61.93px]" : ""
  ].filter(Boolean).join(" ")}
                />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile marquee (unchanged) */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="flex trusted-animate-right" style={{ width: "170%" }}>
              <div className="flex items-center">
                {images.map((src, idx) => (
                  <div key={`m1-${idx}`} className="shrink-0 w-[110px] px-1.5">
                    <img
                      src={src}
                      alt={`Brand ${idx + 1}`}
                      className={[
                        "object-contain mx-auto max-h-[42px] max-w-[100px]",
                        idx === 5 ? "grayscale" : ""
                      ].join(" ")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
