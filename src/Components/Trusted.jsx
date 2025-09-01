// src/components/Trusted.jsx
// Update: Mobile view has reduced height and extra top margin.
// Desktop view stays exactly the same.

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
      className="
        pt-[56px] md:pt-[110px]         /* reduced top padding on mobile */
        pb-6 md:pb-12                  /* reduced bottom padding on mobile */
        mt-6 sm:mt-8 md:mt-0  
         bg-white md:bg-[##fdf8f3] lg:bg-[#fdf8f3]
      "
      // style={{ backgroundColor: "#fdf8f3" }}
    >
        {/* Mobile-only absolute frame to mimic Figma box */}
  <div
    className="
      block md:hidden
      absolute
    "
    style={{
      width: "348px",
      height: "81px",
      top: "177px",
      left: "-109px",
      opacity: 1,
      // keep the section’s background visible; no rotation (angle: 0)
      transform: "rotate(0deg)",
      pointerEvents: "none",
     // ensures it doesn’t block interactions
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

        {/* Desktop logos (unchanged) */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-24 md:-mt-2 lg:-mt-5">
          <img src={img1} alt="Brand 1" className="object-contain w-[215px] h-[101px]" />
          <img src={img2} alt="Brand 2" className="object-contain w-[205px] h-[43px]" />
          <img src={img3} alt="Brand 3" className="object-contain w-[185px] h-[62px]" />
          <img src={img4} alt="Brand 4" className="object-contain w-[163px] h-[59px]" />
          <img src={img5} alt="Brand 5" className="object-contain w-[160px] h-[62px]" />
        </div>

        {/* Mobile marquee with reduced height and spacing */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div className="flex trusted-animate-right" style={{ width: "200%" }}>
              <div className="flex items-center">
                {images.map((src, idx) => (
                  <div key={`m1-${idx}`} className="shrink-0 w-[110px] px-1.5">
                    <img
                      src={src}
                      alt={`Brand ${idx + 1}`}
                      className="object-contain mx-auto max-h-[52px] max-w-[100px]"
                    />
                  </div>
                ))}
              </div>

              <div className="shrink-0 w-[8px]" />

              <div className="flex items-center">
                {images.map((src, idx) => (
                  <div key={`m2-${idx}`} className="shrink-0 w-[110px] px-1.5">
                    <img
                      src={src}
                      alt={`Brand ${idx + 1}`}
                      className="object-contain mx-auto max-h-[52px] max-w-[100px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Optional: small top margin under marquee to breathe */}
          <div className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
