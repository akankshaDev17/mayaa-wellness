import React from "react";
import img1 from "../assets/LPU.webp";
import img2 from "../assets/SVIT.webp";
import img3 from "../assets/CGC.webp";
import img4 from "../assets/CU.webp";
import img5 from "../assets/GJIMT.webp";

const Trusted = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section
      className="py-12 mt-12 sm:mt-12 md:mt-0"
      style={{ backgroundColor: "#fdf8f3" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-base sm:text-lg md:text-3xl text-gray-800 font-juanaMedium whitespace-nowrap md:whitespace-normal">
            Trusted by Top Universities And Colleges
          </h2>
        </div>

        {/* Desktop logos (unchanged) */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-24">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
              className="object-contain"
              style={{ maxHeight: "120px", maxWidth: "170px" }}
            />
          ))}
        </div>

        {/* Mobile one-direction marquee (right) with consistent gaps at wrap */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            {/* Track is 200% wide (two copies) and moves right */}
            <div
              className="flex trusted-animate-right"
              style={{ width: "200%" }}
            >
              {/* Copy 1 */}
              <div className="flex items-center">
                {images.map((src, idx) => (
                  <div key={`m1-${idx}`} className="shrink-0 w-[120px] px-1.5">
                    <img
                      src={src}
                      alt={`Brand ${idx + 1}`}
                      className="object-contain mx-auto"
                      style={{ maxHeight: "64px", maxWidth: "110px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Spacer between copies to preserve gap at the wrap point */}
              <div className="shrink-0 w-[12px]" />

              {/* Copy 2 */}
              <div className="flex items-center">
                {images.map((src, idx) => (
                  <div key={`m2-${idx}`} className="shrink-0 w-[120px] px-1.5">
                    <img
                      src={src}
                      alt={`Brand ${idx + 1}`}
                      className="object-contain mx-auto"
                      style={{ maxHeight: "64px", maxWidth: "110px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
