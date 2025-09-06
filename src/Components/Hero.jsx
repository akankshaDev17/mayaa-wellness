import React, { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import HeroImg from "../assets/Hero.svg";
import Collage from "../assets/Collage.webp";


const Hero = () => {
  // ---------------- Base queries ----------------
  const isMobile = useMediaQuery("(max-width: 480px)", false); // unchanged mobile [19]


  // Feature query to separate touch tablets from desktop at same widths
  const isTouchPrimary = useMediaQuery("(hover: none) and (pointer: coarse)", false); // iPad/phones [19]


  // Width bands (non-overlapping) for tablets [19]
  const isIPadMiniBand = useMediaQuery("(min-width: 768px) and (max-width: 819px)", false); // [19]
  const isIPadAirBand  = useMediaQuery("(min-width: 820px) and (max-width: 1023px)", false); // [19]
  const isIPadProWidthBand = useMediaQuery("(min-width: 1024px) and (max-width: 1350px)", false); // [19]


  // Orientation-specific exact-size fallbacks for iPad Pro (Safari quirks) [2]
  const isIPadProPortrait = useMediaQuery("(width: 1024px) and (height: 1366px) and (orientation: portrait)", false); // [2]
  const isIPadProLandscape = useMediaQuery("(width: 1366px) and (height: 1024px) and (orientation: landscape)", false); // [2]


  // Dedicated exact match for 749 × 1024 portrait + resilient approximate fallback [10]
  const is749x1024PortraitExact = useMediaQuery("(width: 749px) and (height: 1024px) and (orientation: portrait)", false); // [10][2]
  const is749x1024PortraitApprox = useMediaQuery("(min-width: 745px) and (max-width: 753px) and (min-height: 1018px) and (max-height: 1030px) and (orientation: portrait)", false); // [19]
  const isTarget749 = is749x1024PortraitExact || is749x1024PortraitApprox; // [19]


  // NEW: 743-wide compact-mobile bucket (now a 743–767px range) [19][17]
  // Replaced exact/approx with inclusive min–max band per MDN guidance. [web:12][web:5]
  const is743Range = useMediaQuery("(min-width: 481px) and (max-width: 767.5px)", false); // [web:12]
  const isWidth743 = is743Range; // preserve variable used below [web:12]


  // Final tablet flags (gate by touch-primary to avoid desktop false positives) [1]
  const isIPadMini = isTouchPrimary && isIPadMiniBand; // [1]
  const isIPadAir  = isTouchPrimary && isIPadAirBand; // [1]
  const isIPadProCompact =
    isTouchPrimary && (isIPadProWidthBand || isIPadProPortrait || isIPadProLandscape); // [1][5]


  // Include the 749×1024 case inside tablets (others intact) [1]
  const isAnyTablet = isTarget749 || isIPadMini || isIPadAir || isIPadProCompact; // [1]


  const handleProtect = () => console.log("Protect My Child"); // unchanged [6]
  const handleBookFreeCall = () => console.log("Book a Free Call"); // unchanged [6]


  // Optional debug
  useEffect(() => {
    // console.log({ w: window.innerWidth, h: window.innerHeight, isTouchPrimary, isWidth743, isTarget749, isIPadMini, isIPadAir, isIPadProCompact });
  }, [isTouchPrimary, isWidth743, isTarget749, isIPadMini, isIPadAir, isIPadProCompact]); // [7]


  // ---------------- 743-WIDE COMPACT-MOBILE ----------------
  // Render the mobile DOM, but scale up a bit for the larger width. [1]
  if (isWidth743) {
    return (
      <section className="relative bg-[#F4FFFC] overflow-hidden px-5 pt-8 pb-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #1EA887 0%, #24D490 100%)",
            clipPath: "polygon(100% 50%, 100% 120%, 0 100%)", // slightly higher wedge [1]
          }}
        />
        <div className="relative z-10">
          <h1 className="font-gilroyBold text-[49px] leading-[1.12] text-center">
            <span className="block text-[#1EA887]">Your Child Is Leaving</span>
            <span className="block">
              <span className="text-[#1EA887]">for College.</span>{" "}
              <span className="text-[#09384D]">We’ll Take</span>
            </span>
            <span className="block text-[#09384D]">Care of Their Health</span>
            <span className="block text-[#09384D]">When You Can’t.</span>
          </h1>
          <p className="font-urbanistRegular text-[#09384D] text-[19px] leading-[1.5] text-center mt-4 max-w-[400px] mx-auto">
            24/7 doctor consults, mental health support, annual checkups, and
            accident insurance<br/>— all in one affordable plan.
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleProtect}
              className="bg-[#1EA887] text-white font-juanaBold font-bold text-[15px] leading-[1.1] w-[194px] h-[54px] rounded-full shadow-[3.64px_4.37px_0_0_#58EE8B4A]"
              style={{ borderRadius: "80px" }}
            >
              Protect My Child
            </button>
          </div>
          <div className="flex items-center justify-center gap-7 mt-6">
            <img
              src={Collage}
              alt="Trusted users"
              className="h-[36px] w-[140px] object-contain rounded-full"
            />
            <div className="leading-[1.5] text-center">
              <p className="font-urbanistRegular text-[#09384D] text-[12px]">Trusted by</p>
              <p className="font-gilroyBold text-[#09384D] text-[16px]">
                <span className="font-black">10,000+</span>{" "}
                <span className="font-urbanistRegular font-normal">parents</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full" style={{ height: 490 }}>
          <img
            src={HeroImg}
            alt="Student"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-3.5px] h-[460px] w-[320px] object-contain select-none"
            draggable={false}
          />
          <button
            onClick={handleBookFreeCall}
            className="bg-white text-[#09384D] font-juanaBold font-bold text-[14.5px] leading-[1.1] w-[180px] h-[50px] rounded-full shadow-[3px_4px_0_0_#22ABBE4A]"
            style={{
              borderRadius: "64px",
              position: "absolute",
              right: "8px",
              bottom: "46px",
            }}
          >
            Book a Free Call
          </button>
        </div>
      </section>
    ); // mobile DOM with scaled sizes for 743–767 [1]
  }


  // ---------------- MOBILE (≤480px) ----------------
  if (isMobile) {
    return (
      <section className="relative bg-[#F4FFFC] overflow-hidden px-4 pt-7 pb-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #1EA887 0%, #24D490 100%)",
            clipPath: "polygon(100% 55%, 100% 120%, 0 100%)",
          }}
        />
        <div className="relative z-10">
          <h1 className="font-gilroyBold text-[31.26px] leading-[1.11] text-center">
            <span className="block text-[#1EA887]">Your Child Is Leaving</span>
            <span className="block">
              <span className="text-[#1EA887]">for College.</span>{" "}
              <span className="text-[#09384D]">We’ll Take</span>
            </span>
            <span className="block text-[#09384D]">Care of Their Health</span>
            <span className="block text-[#09384D]">When You Can’t.</span>
          </h1>
          <p className="font-urbanistRegular text-[#09384D] text-[16px] leading-[1.5] text-center mt-4 max-w-[349px] mx-auto">
            24/7 doctor consults, mental health support, annual checkups, and
            accident insurance<br/>— all in one affordable plan.
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={handleProtect}
              className="bg-[#1EA887] text-white font-juanaBold font-bold text-[14px] leading-[1.1] w-[168px] h-[47px] rounded-full shadow-[3.64px_4.37px_0_0_#58EE8B4A]"
              style={{ borderRadius: "76.52px" }}
            >
              Protect My Child
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-5">
            <img
              src={Collage}
              alt="Trusted users"
              className="h-[30px] w-[117px] object-contain rounded-full"
            />
            <div className="leading-[1.5] text-center">
              <p className="font-urbanistRegular text-[#09384D] text-[10.9px]">Trusted by</p>
              <p className="font-gilroyBold text-[#09384D] text-[14px]">
                <span className="font-black">10,000+</span>{" "}
                <span className="font-urbanistRegular font-normal">parents</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full" style={{ height: 440 }}>
          <img
            src={HeroImg}
            alt="Student"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[413px] w-[293px] object-contain select-none"
            draggable={false}
          />
          <button
            onClick={handleBookFreeCall}
            className="bg-white text-[#09384D] font-juanaBold font-bold text-[13.7px] leading-[1.1] w-[168px] h-[46.6px] rounded-full shadow-[2.86px_3.44px_0_0_#22ABBE4A]"
            style={{
              borderRadius: "60.13px",
              position: "absolute",
              right: "2px",
              bottom: "38px",
            }}
          >
            Book a Free Call
          </button>
        </div>
      </section>
    ); // mobile unchanged [1]
  }


  // ----------- TABLET buckets (desktop-like DOM with compact sizing) -----------
  if (isAnyTablet) {
    const sizing = (() => {
      // 1) 749 × 1024 (exact + approx) first [2]
      if (isTarget749) {
        return {
          h1Size: "text-[33px]",
          subSize: "text-[14px]",
          imgH: "h-[600px] mt-6",
          padX: "px-5",
          padY: "pt-5 pb-10",
          wedgeClip: "polygon(100% 8%, 100% 120%, 0 100%)",
          ctaW: 210, ctaH: 56,
          gap: "gap-5",
          leftOffset: "md:ml-8",
          rightOffset: "md:mr-8",
        };
      }
      // 2) iPad Mini [1]
      if (isIPadMini) {
        return {
          h1Size: "text-[31px]",
          subSize: "text-[13px]",
          imgH: "h-[560px] mt-10",
          padX: "px-5",
          padY: "pt-4 pb-9",
          wedgeClip: "polygon(100% 9%, 100% 120%, 0 100%)",
          ctaW: 205, ctaH: 54,
          gap: "gap-5",
          leftOffset: "md:ml-8",
          rightOffset: "md:mr-8",
        };
      }
      // 3) iPad Air [1]
      if (isIPadAir) {
        return {
          h1Size: "text-[32px]",
          subSize: "text-[14px]",
          imgH: "h-[600px] mt-10",
          padX: "px-6",
          padY: "pt-5 pb-10",
          wedgeClip: "polygon(100% 8%, 100% 120%, 0 100%)",
          ctaW: 210, ctaH: 56,
          gap: "gap-5",
          leftOffset: "md:ml-10",
          rightOffset: "md:mr-10",
        };
      }
      // 4) iPad Pro compact 1024–1350 [1]
      return {
        h1Size: "text-[39px]",
        subSize: "text-[13px]",
        imgH: "h-[530px] mt-2",
        padX: "px-6",
        padY: "pt-6 pb-12",
        wedgeClip: "polygon(100% 8%, 100% 120%, 0 100%)",
        ctaW: 220, ctaH: 58,
        gap: "gap-6",
        leftOffset: "md:ml-12",
        rightOffset: "md:mr-12",
      };
    })(); // first-match wins [8]


    return (
      <section className="relative bg-[#F4FFFC] overflow-hidden">
        <div
          className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
          style={{
            background: "linear-gradient(135deg, #1EA887, #24D490)",
            clipPath: sizing.wedgeClip,
          }}
        />
        <div className={`relative max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between ${sizing.padY} ${sizing.padX} ${sizing.gap}`}>
          <div className={`z-10 w-full md:w-1/2 flex flex-col text-left -mt-2 ${sizing.leftOffset}`}>
            <h1 className={`font-gilroyBold text-[#09384D] leading-[1.12] ${sizing.h1Size} max-w-[760px] mb-3`}>
              <span className="text-[#1EA887]">Your Child Is Leaving</span>
              <br />
              <span className="text-[#1EA887]">for College.</span> We’ll Take
              <br />
              Care of Their Health
              <br />
              When You Can’t.
            </h1>
            <p className={`font-urbanistRegular text-[#09384D] ${sizing.subSize} leading-[1.48] max-w-[600px] mb-5`}>
              24/7 doctor consults, mental health support, annual checkups, and accident insurance — all in one affordable plan.
            </p>
            <div className="flex items-center gap-4 mb-5">
              <img src={Collage} alt="Trusted users" className="h-[44px] w-auto rounded-full" />
              <div className="leading-[1.5]">
                <p className={`font-urbanistRegular text-[#09384D] ${sizing.subSize}`}>Trusted by</p>
                <p className={`font-gilroyBold text-[#09384D] ${sizing.subSize}`}>
                  <span className="font-black">10,000+</span>{" "}
                  <span className="font-urbanistRegular font-normal">parents</span>
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleProtect}
                className="bg-[#1EA887] text-white font-juanaBold font-bold text-center leading-[1.1] rounded-full shadow-[4px_5px_0_0_#58EE8B4A] transition-colors duration-200 hover:bg-[#189D74] cursor-pointer"
                style={{
                  borderRadius: 96,
                  width: sizing.ctaW,
                  height: sizing.ctaH,
                  fontSize:
                    sizing.h1Size === "text-[28px]" ? 15 :
                    sizing.h1Size === "text-[30px]" ? 16 :
                    sizing.h1Size === "text-[32px]" ? 17 : 18,
                  padding: "10px 20px",
                }}
              >
                Protect My Child
              </button>
            </div>
          </div>


          <div className={`relative w-full md:w-1/2 min-h-[520px] ${sizing.rightOffset}`}>
            <img
              src={HeroImg}
              alt="Student"
              className={`absolute top-0 right-0 ${sizing.imgH} w-auto object-contain object-top rounded-lg md:rounded-xl`}
            />
          </div>
        </div>
      </section>
    ); // tablet branch [1]
  }


  // ---------------- DESKTOP (unchanged) ----------------
  return (
    <section className="relative bg-[#E8F8F5] overflow-hidden">
      <div
        className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
        style={{
          background: "linear-gradient(135deg, #1EA887, #24D490)",
          clipPath: "polygon(100% 8%, 100% 120%, 0 100%)",
        }}
      />
      <div className="relative max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pt-2 pb-8 md:pt-4 md:pb-10 lg:pt-6 lg:pb-14 px-4 sm:px-6 lg:px-8 gap-4 md:gap-6">
        <div className="z-10 w-full md:w-1/2 flex flex-col text-left -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-34 md:ml-8 lg:ml-12">
          <h1 className="font-gilroyBold text-[#09384D] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[62.39px] lg:leading-[1.11] lg:max-w-[799px] mb-3 sm:mb-4">
            <span className="text-[#1EA887]">Your Child Is Leaving</span>
            <br />
            <span className="text-[#1EA887]">for College.</span> We’ll Take
            <br />
            Care of Their Health
            <br />
            When You Can’t.
          </h1>
          <p className="font-urbanistRegular font-normal text-[#09384D] text-[14px] leading-[1.5] sm:text=[16px] md:text-[18px] lg:text-[20px] lg:leading-[1.5] lg:max-w-[627px] mb-5 md:mb-6">
            24/7 doctor consults, mental health support, annual checkups, and
            accident insurance — all in one affordable plan.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-[44px] mb-5 md:mb-6">
            <img
              src={Collage}
              alt="Trusted users"
              className="h-[36px] w-auto sm:h-[44px] md:h-[50px] lg:h-[55px] lg:w-[215px] rounded-full"
            />
            <div className="leading-[1.5]">
              <p className="font-urbanistRegular font-normal text-[#09384D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                Trusted by
              </p>
              <p className="font-gilroyBold text-[#09384D] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                <span className="font-black">10,000+</span>{" "}
                <span className="font-urbanistRegular font-normal">parents</span>
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleProtect}
              className="bg-[#1EA887] text-white font-juanaBold font-bold  text-center text-[13px] leading-[1.1] px-5 py-2 sm:text-[16px] sm:px-6 sm:py-2.5 md:text-[18px] md:px-7 md:py-3 lg:text-[24px] lg:w-[250px] lg:h-[64px] rounded-full shadow-[5px_6px_0_0_#58EE8B4A] transition-colors duration-200 hover:bg-[#189D74] cursor-pointer"
              style={{ borderRadius: "105px" }}
            >
              Protect My Child
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[360px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[800px]  md:mr-8 lg:mr-12">
          <img
            src={HeroImg}
            alt="Student"
            className="absolute top-0 right-0 h-[360px] w-auto sm:h-[420px] md:h-[560px] lg:h-[800px] lg:w-[567px] object-contain object-top rounded-lg md:rounded-xl opacity-100"
          />
        </div>
      </div>
    </section>
  ); // desktop unchanged [1]
};


export default Hero;
