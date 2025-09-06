import React from "react";
import Pop1 from "../assets/pop1.png";
import Pop2 from "../assets/pop2.png";
import Pop3 from "../assets/pop3.png";
import useMediaQuery from "../hooks/useMediaQuery";


const Pop = () => {
  const handleBookCall = () => console.log("book a free call");

  // Mutually exclusive view flags
  const isMobile = useMediaQuery("(max-width: 480px)", false); // mobile only [kept]
  // New: mid band that should still render "mobile view" but scaled up a bit (481–767.5)
  const isMobileScaled = useMediaQuery("(min-width: 481px) and (max-width: 767.5px)", false); // inclusive band [1][6]

  // Tablet: include iPad mini 6/7 (744w), classic iPads (768w), and up to 1350
  const isTablet = useMediaQuery("(min-width: 744px) and (max-width: 1350px)", false); // tablet band [kept] [1][2]
  const isNarrowTablet = useMediaQuery("(min-width: 744px) and (max-width: 799px)", false); // tighter sizing for 744–799 incl. 749×1024 [kept]
  const isDesktop = useMediaQuery("(min-width: 1351px)", false); // desktop 1351+ [kept]

  // iPad-specific width buckets to slightly decrease section width on iPad variants
  const isIPadMiniBand = useMediaQuery("(min-width: 744px) and (max-width: 767px)", false); // iPad mini 6/7 width [16][1]
  const isIPadAirBand  = useMediaQuery("(min-width: 820px) and (max-width: 1023px)", false); // iPad Air width band [kept pattern] [1]
  const isIPadProBand  = useMediaQuery("(min-width: 1024px) and (max-width: 1350px)", false); // iPad Pro compact band [kept pattern] [1]

  // 1) MOBILE (unchanged)
  if (isMobile) {
    return (
      <section className="w-full flex justify-center">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Card 1 */}
            <div className="flex items-center gap-2 w-[120.47px] h-[45.44px] bg-white rounded-[3.43px] shadow-[0px_3.83px_12.8px_3.77px_#0000001A] px-2">
              <img src={Pop1} alt="Starting at" className="w-[19px] h-[24px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[10.92px] leading-[13.8px]">
                <span className="block whitespace-nowrap">Starting at</span>
                <span className="block whitespace-nowrap">just ₹75/month</span>
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-2 w-[115.47px] h-[45.44px] bg-white rounded-[3.43px] shadow-[0px_3.83px_12.8px_3.77px_#0000001A] px-2">
              <img src={Pop2} alt="Pan‑India" className="w-[17px] h-[21px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[10.09px] leading-[13.79px]">
                <span className="block whitespace-nowrap">Pan‑India</span>
                <span className="block whitespace-nowrap">Coverage</span>
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-2 w-[115.47px] h-[45.44px] bg-white rounded-[3.43px] shadow-[0px_3.83px_12.8px_3.77px_#0000001A] px-2">
              <img src={Pop3} alt="Claims Settled" className="w-[18px] h-[23px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[10.09px] leading-[13.79px]">
                <span className="block whitespace-nowrap">99% Claims</span>
                <span className="block whitespace-nowrap">Settled</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 1.5) MOBILE-SCALED (481–767.5): same DOM as mobile, slightly larger sizes
  if (isMobileScaled) {
    return (
      <section className="w-full flex justify-center">
        <div className="w-full px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Card 1 */}
            <div className="flex items-center gap-2.5 w-[158px] h-[62px] bg-white rounded-[4px] shadow-[0px_4px_14px_4px_#0000001A] px-2.5">
              <img src={Pop1} alt="Starting at" className="w-[21px] h-[26px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[12.2px] leading-[15.4px]">
                <span className="block whitespace-nowrap">Starting at</span>
                <span className="block whitespace-nowrap">just ₹75/month</span>
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex items-center gap-2.5 w-[152px] h-[62px] bg-white rounded-[4px] shadow-[0px_4px_14px_4px_#0000001A] px-2.5">
              <img src={Pop2} alt="Pan‑India" className="w-[19px] h-[23px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[11.3px] leading-[15.4px]">
                <span className="block whitespace-nowrap">Pan‑India</span>
                <span className="block whitespace-nowrap">Coverage</span>
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex items-center gap-2.5 w-[152px] h-[62px] bg-white rounded-[4px] shadow-[0px_4px_14px_4px_#0000001A] px-2.5">
              <img src={Pop3} alt="Claims Settled" className="w-[20px] h-[25px] object-contain" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal" }} draggable={false} />
              <p className="font-gilroySemiBold text-[#09384D] text-[11.3px] leading-[15.4px]">
                <span className="block whitespace-nowrap">99% Claims</span>
                <span className="block whitespace-nowrap">Settled</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 2) TABLET (desktop-like but scaled; exclusive for 744–1350)
  if (isTablet) {
    const textSize = isNarrowTablet
      ? "text-[26px] leading-[32px]"
      : "text-[28px] leading-[34px]";
    const boxWidthBase = isNarrowTablet ? "w-[96vw] h-[146px]" : "w-[94vw] h-[150px]";

    // Reduce width a bit more on iPad variants only (Mini/Air/Pro)
    const narrowed =
      isIPadMiniBand ? "w-[92vw]" : // Mini 6/7 slightly narrower
      isIPadAirBand  ? "w-[92vw]" : // Air
      isIPadProBand  ? "w-[92vw]" : // Pro compact
      ""; // others unchanged

    const boxWidth = `${narrowed || boxWidthBase.split(" ").find(c => c.startsWith("w-"))} ${boxWidthBase.split(" ").find(c => c.startsWith("h-"))}`;
    const padX = isNarrowTablet ? "px-3" : "px-4 lg:px-12";
    const ctaW = isNarrowTablet ? "w-[198px] h-[54px]" : "w-[210px] h-[58px]";

    return (
      <section className="w-full flex justify-center relative z-50">
        <div
          className={`
            relative
            ${boxWidth}
            bg-white rounded-[18px]
            shadow-[0px_4px_50px_0px_#0000001A]
            flex items-center justify-between
            ${padX}
          `}
        >
          {/* Column 1 */}
          <div className="max-w-[220px] h-[70px] overflow-visible">
            <p
              className={`font-gilroySemiBold font-semibold text-[#09384D] ${textSize}`}
            >
              <span className="block whitespace-nowrap">Starting at</span>
              <span className="block whitespace-nowrap">just ₹75/month</span>
            </p>
          </div>

          {/* Column 2 */}
          <div className="max-w-[145px] h-[70px] overflow-visible">
            <p
              className={`font-gilroySemiBold font-semibold text-[#09384D] ${textSize}`}
            >
              <span className="block whitespace-nowrap">Pan-India</span>
              <span className="block whitespace-nowrap">Coverage</span>
            </p>
          </div>

          {/* Column 3 */}
          <div className="max-w-[170px] h-[70px] overflow-visible">
            <p
              className={`font-gilroySemiBold font-semibold text-[#09384D] ${textSize}`}
            >
              <span className="block whitespace-nowrap">99% Claims</span>
              <span className="block whitespace-nowrap">Settled</span>
            </p>
          </div>

          {/* CTA button (tablet only) */}
          <button
            onClick={handleBookCall}
            className={`
              grid place-items-center
              ${ctaW} rounded-[95px]
              bg-[#09384D] text-white
              shadow-[4px_5px_0px_0px_#22ABBE4A]
            `}
          >
            <span
              className={`font-juanaBold ${
                isNarrowTablet ? "text-[20px]" : "text-[22px]"
              } leading-[1.10]`}
            >
              Book a Free Call
            </span>
          </button>
        </div>
      </section>
    );
  }

  // 3) DESKTOP (≥1351px) — original desktop bar
  if (isDesktop) {
    return (
      <section className="w-full flex justify-center ">
        <div
          className="
            relative z-50
            w-[90vw] h-[180px]
            bg-white rounded-[20px]
            shadow-[0px_4px_60px_0px_#0000001A]
            flex items-center justify-between
            px-0 lg:px-20
          "
        >
          {/* Column 1 */}
          <div className="max-w-[246px] h-[79px] overflow-visible">
            <p className="font-gilroySemiBold font-semibold text-[#09384D] text-[33.84px] leading-[39.33px]">
              Starting at<br />just ₹75/month
            </p>
          </div>
          {/* Column 2 */}
          <div className="max-w-[156px] h-[79px] overflow-visible">
            <p className="font-gilroySemiBold font-semibold text-[#09384D] text-[33.84px] leading-[39.33px]">
              Pan‑India<br />Coverage
            </p>
          </div>
          {/* Column 3 */}
          <div className="max-w-[187px] h-[79px] overflow-visible">
            <p className="font-gilroySemiBold font-semibold text-[#09384D] text-[33.84px] leading-[39.33px]">
              99% Claims<br />Settled
            </p>
          </div>
          {/* CTA */}
           {!isTablet && (
      <button
        onClick={handleBookCall}
        className="grid place-items-center w-[210px] h-[58px] rounded-[95px] bg-[#09384D] text-white shadow-[4px_5px_0px_0px_#22ABBE4A]"
      >
        <span className="font-juanaBold text-[22px] leading-[1.10]">
          Book a Free Call
        </span>
      </button>
    )}
        </div>
      </section>
    );
  }

  // Fallback (rare: widths between 481–743 or 1350–1351 if any rounding)
  return null;
};


export default Pop;
