import React from "react";
import careImg from "../assets/Care.webp";
import tataImg from "../assets/TATA_AIG.webp";
import bajajImg from "../assets/Bajaj.webp";

const ReviewOverview = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-0 mt-6 md:mt-25">
      {/* Top text */}
      <h2 className="text-center text-[#0A2E36] text-xs sm:text-sm md:text-base lg:text-lg font-juanaMedium mb-3 md:mb-4 ">
        Your Health, Our Reach - Backed by a Strong Nationwide Presence
      </h2>

      {/* Green strip - single row on all breakpoints; mobile is compact */}
      <div
        className="
          w-full max-w-[1179px]
          flex items-center justify-between
          text-white rounded-[22px] md:rounded-lg
          /* Mobile compact sizing */
          px-2 h-[72px]
          /* Desktop (unchanged) */
          sm:px-4 sm:h-[104px] md:h-[139.75px]
          shadow-[0_8px_24px_rgba(27,190,131,0.35)]
        "
        style={{ backgroundColor: "#31B07B" }}
      >
        {/* 1 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[26px] lg:text-[32px] font-gilroyHeavy">
            20,000+
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-base md:leading-snug font-gilroyMedium opacity-95">
            Network Hospitals
          </span>
        </div>

        {/* Divider shown from sm+ to avoid crowding on tiny screens */}
        <div className="hidden sm:block w-px h-8 md:h-10 bg-white/30" />

        {/* 2 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[26px] lg:text-[32px] font-gilroyHeavy">
            32,000+
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-base md:leading-snug font-gilroyMedium opacity-95">
            Doctors Empaneled
          </span>
        </div>

        <div className="hidden sm:block w-px h-8 md:h-10 bg-white/30" />

        {/* 3 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[26px] lg:text-[32px] font-gilroyHeavy">
            2477
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-base md:leading-snug font-gilroyMedium opacity-95">
            Diagnostic Centers
          </span>
        </div>

        <div className="hidden sm:block w-px h-8 md:h-10 bg-white/30" />

        {/* 4 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[26px] lg:text-[32px] font-gilroyHeavy">
            9000+
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-base md:leading-snug font-gilroyMedium opacity-95">
            Pin-codes Services
          </span>
        </div>
      </div>

      {/* Bottom text */}
      <h3 className="text-center text-[#0A2E36] text-xs sm:text-sm md:text-base mt-5 md:mt-6 mb-3 md:mb-4 font-juanaMedium leading-snug">
        Backed by the trust and assurance of the top insurers
      </h3>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
        <img
          src={careImg}
          alt="Care Health Insurance"
          className="object-contain h-10 w-auto sm:h-[60px] md:h-[87.06px]"
        />
        <img
          src={tataImg}
          alt="TATA AIG Insurance"
          className="object-contain h-11 w-11 sm:h-[80px] sm:w-[80px] md:h-[109.4px] md:w-[109.4px]"
        />
        <img
          src={bajajImg}
          alt="Bajaj Allianz"
          className="object-contain h-4 w-auto sm:h-[16px] md:h-[21.43px]"
        />
      </div>

      {/* Optional: ultra-narrow safeguard to keep one-line fit at ≤380px */}
      <style>{`
        @media (max-width: 380px) {
          /* Slight scale-down to guarantee single row without wrapping */
          .xs-tight-scale {
            transform: scale(0.95);
            transform-origin: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewOverview;
