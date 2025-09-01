import React from "react";
import careImg from "../assets/Care.webp";
import tataImg from "../assets/TATA_AIG.webp";
import bajajImg from "../assets/Bajaj.webp";

const ReviewOverview = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-0 mt-40 md:mt-20 sm:mt-2">
      {/* Top text */}
      <h2
        className="
          text-center text-[#0A2E36]
          text-xs sm:text-sm
          md:text-[20px] md:leading-[150%]
          lg:text-[20px] lg:leading-[150%]
          font-juanaMedium
          mb-3 md:mb-4 mt-12
          md:w-[615px]
        "
      >
        Your Health, Our Reach - Backed by a Strong Nationwide Presence
      </h2>

      {/* Green strip */}
      <div
        className="
      
          w-full max-w-[90vw]
          flex items-center justify-between
          text-white
          rounded-[22px] md:rounded-[25.41px]
          px-2 h-[72px]
          sm:px-4 sm:h-[104px]
          md:h-[139.75px]
          shadow-[0_8px_24px_rgba(27,190,131,0.35)]
          backdrop-blur-none md:backdrop-blur-[19.53px] 
        "
        style={{ backgroundColor: "#31B07B" }}
      >
        {/* 1 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[11px] leading-none sm:text-[20px] md:text-[52px] lg:text-[52px] md:leading-[1] font-gilroyHeavy">
            20,000+
          </span>
          <span className="text-[8px] leading-[11px] sm:text-xs sm:leading-tight md:text-[25.41px] md:leading-[1] font-gilroyMedium opacity-95">
            Network Hospitals
          </span>
        </div>

        {/* Divider */}
       

        {/* 2 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[52px] lg:text-[52px] md:leading-[1] font-gilroyHeavy">
            32,000+
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-[25.41px] md:leading-[1] font-gilroyMedium opacity-95">
            Doctors Empaneled
          </span>
        </div>

     

        {/* 3 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[52px] lg:text-[52px] md:leading-[1] font-gilroyHeavy">
            2477
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-[25.41px] md:leading-[1] font-gilroyMedium opacity-95">
            Diagnostic Centers
          </span>
        </div>

        

        {/* 4 */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-[13px] leading-none sm:text-[20px] md:text-[52.11px] lg:text-[52.11px] md:leading-[1] font-gilroyHeavy">
            9000+
          </span>
          <span className="text-[9px] leading-[11px] sm:text-xs sm:leading-tight md:text-[25.41px] md:leading-[1] font-gilroyMedium opacity-95 text-center">
            Pin-codes Services
          </span>
        </div>
      </div>

      {/* Bottom text */}
      <h3
        className="
          text-center text-[#0A2E36]
          text-xs sm:text-sm
          md:text-[18.54px] md:leading-[150%]
          mt-5 md:mt-17 mb-3 md:mb-4
          font-juanaMedium
        "
      >
        Backed by the trust and assurance of the top insurers
      </h3>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-48 mt-10">
        <img
          src={careImg}
          alt="Care Health Insurance"
          className="object-contain h-10 w-auto sm:h-[60px] md:h-[87.06px] md:w-[122.37px]"
        />
        <img
          src={tataImg}
          alt="TATA AIG Insurance"
          className="object-contain h-11 w-11 sm:h-[80px] sm:w-[80px] md:h-[109.4px] md:w-[109.4px]"
        />
        <img
          src={bajajImg}
          alt="Bajaj Allianz"
          className="object-contain h-4 w-auto sm:h-[16px] md:h-[21.43px] md:w-[167.8px]"
        />
      </div>

      {/* Optional safeguard for very narrow screens (unchanged) */}
      <style>{`
        @media (max-width: 380px) {
          .xs-tight-scale { transform: scale(0.95); transform-origin: center; }
        }
      `}</style>
    </div>
  );
};

export default ReviewOverview;
