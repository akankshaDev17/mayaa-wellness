import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import HeroImg from "../assets/Hero.svg";
import Collage from "../assets/Collage.webp";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 480px)", false);
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1350px)", false);

  const handleProtect = () => console.log("Protect My Child");
  const handleBookFreeCall = () => console.log("Book a Free Call");

  // ---------------- MOBILE (≤480px) ----------------
  if (isMobile) {
    return (
      <section
        className="
          relative bg-[#E8F8F5] overflow-hidden
          px-4 pt-7
          pb-0
        "
      >
        {/* Wedge confined to lower-right (SS1) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #1EA887 0%, #24D490 100%)",
            clipPath: "polygon(100% 55%, 100% 120%, 0 100%)",
          }}
        />

        {/* Content wrapper (kept above wedge) */}
        <div className="relative z-10">
          {/* Headline (4 lines, as per SS1) */}
          <h1 className="font-gilroyBold text-[31.26px] leading-[1.11] text-center">
            <span className="block text-[#1EA887]">Your Child Is Leaving</span>
            <span className="block">
              <span className="text-[#1EA887]">for College.</span>{" "}
              <span className="text-[#09384D]">We’ll Take</span>
            </span>
            <span className="block text-[#09384D]">Care of Their Health</span>
            <span className="block text-[#09384D]">When You Can’t.</span>
          </h1>

          {/* Subtext */}
          <p className="font-urbanistRegular text-[#09384D] text-[16px] leading-[1.5] text-center mt-4 max-w-[349px] mx-auto">
            24/7 doctor consults, mental health support, annual checkups, and
            accident insurance<br/>— all in one affordable plan.
          </p>

          {/* Protect CTA */}
          <div className="flex justify-center mt-5">
            <button
              onClick={handleProtect}
              className="bg-[#1EA887] text-white font-juanaBold font-bold text-[14px] leading-[1.1] w-[168px] h-[47px] rounded-full shadow-[3.64px_4.37px_0_0_#58EE8B4A]"
              style={{ borderRadius: "76.52px" }}
            >
              Protect My Child
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <img
              src={Collage}
              alt="Trusted users"
              className="h-[30px] w-[117px] object-contain rounded-full"
            />
            <div className="leading-[1.5] text-center">
              <p className="font-urbanistRegular text-[#09384D] text-[10.9px]">
                Trusted by
              </p>
              <p className="font-gilroyBold text-[#09384D] text-[14px]">
                <span className="font-black">10,000+</span>{" "}
                <span className="font-urbanistRegular font-normal">parents</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sticky-bottom image and docked button */}
        <div className="relative w-full" style={{ height: 440 }}>
          {/* Student image stuck to bottom */}
          <img
            src={HeroImg}
            alt="Student"
            className="
              absolute left-1/2 -translate-x-1/2 bottom-6
              h-[413px] w-[293px] object-contain
              select-none
            "
            draggable={false}
          />

          {/* Book a Free Call pill inside green area near bottom-right (with padding) */}
          <button
            onClick={handleBookFreeCall}
            className="
              bg-white text-[#09384D]
              font-juanaBold font-bold
              text-[13.7px] leading-[1.1]
              w-[168px] h-[46.6px]
              rounded-full shadow-[2.86px_3.44px_0_0_#22ABBE4A]
            "
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
    );
  }

  // ----------- TABLET / NEST HUB MAX (min-width: 768px, max-width: 1279px) -----------
  if (isTablet) {
    return (
      <section className="relative bg-[#E8F8F5] overflow-hidden px-3 pt-4 pb-8">
        {/* Gradient wedge on right */}
        <div
          className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
          style={{
            background: "linear-gradient(135deg, #1EA887, #24D490)",
            clipPath: "polygon(100% 8%, 100% 120%, 0 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pt-2 pb-8 md:pt-4 px-3 gap-3 md:gap-4">
          {/* Left */}
          <div className="z-10 w-full md:w-1/2 flex flex-col text-left -mt-1 md:ml-6">
            <h1
              className="
                font-gilroyBold text-[#09384D]
    text-[34px]
    md:text-[38px] md:leading-[1.12]
    max-w-[520px]
    mb-2
              "
            >
              <span className="text-[#1EA887] block">Your Child Is Leaving</span>
              <span className="text-[#1EA887] block">for College.</span>{" "}
              We’ll Take
              <br />
              <span className="text-[#09384D]">Care of Their Health</span>
              <br />
              <span className="text-[#09384D]">When You Can’t.</span>
            </h1>

            <p
              className="
                font-urbanistRegular font-normal text-[#09384D]
                text-[15px] leading-[1.48]
                max-w-[420px]
                mb-3
              "
            >
              24/7 doctor consults, mental health support, annual checkups, and
              accident insurance — all in one affordable plan.
            </p>

            <div
              className="
                flex items-center
                gap-3 md:gap-4
                mb-4
              "
            >
              <img
                src={Collage}
                alt="Trusted users"
                className="
                  h-[38px] w-[120px] object-contain
                  rounded-full
                "
              />
              <div className="leading-[1.5]">
                <p className="font-urbanistRegular font-normal text-[#09384D] text-[13px]">
                  Trusted by
                </p>
                <p className="font-gilroyBold text-[#09384D] text-[16px]">
                  <span className="font-black">10,000+</span>{" "}
                  <span className="font-urbanistRegular font-normal">parents</span>
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={handleProtect}
                className="
                  bg-[#1EA887] text-white font-juanaBold font-bold  text-center
                  text-[15px] leading-[1.1] px-5 py-2 
                  w-[180px] h-[50px]
                  rounded-full
                  shadow-[4px_5px_0_0_#58EE8B4A]
                  transition-colors duration-200 hover:bg-[#189D74] cursor-pointer
                "
                style={{ borderRadius: "80px" }}
              >
                Protect My Child
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full md:w-1/2 min-h-[380px] md:mr-6">
            <img
              src={HeroImg}
              alt="Student"
              className="
                absolute top-0 right-0
                h-[370px] w-[250px]
                object-contain object-top
                rounded-lg
                opacity-100
              "
            />
          </div>
        </div>

        {/* Book a Free Call pill inside green area near bottom-right */}
        <button
          onClick={handleBookFreeCall}
          className="
            bg-white text-[#09384D]
            font-juanaBold font-bold
            text-[13px] leading-[1.1]
            w-[160px] h-[44px]
            rounded-full shadow-[2.5px_3px_0_0_#22ABBE4A]
            absolute right-6 bottom-10
          "
          style={{
            borderRadius: "60px"
          }}
        >
          Book a Free Call
        </button>
      </section>
    );
  }

  // ---------------- DESKTOP (unchanged) ----------------
  return (
    <section className="relative bg-[#E8F8F5] overflow-hidden">
      {/* Gradient wedge on right */}
      <div
        className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
        style={{
          background: "linear-gradient(135deg, #1EA887, #24D490)",
          clipPath: "polygon(100% 8%, 100% 120%, 0 100%)",
        }}
      />
      <div className="relative max-w-8xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pt-2 pb-8 md:pt-4 md:pb-10 lg:pt-6 lg:pb-14 px-4 sm:px-6 lg:px-8 gap-4 md:gap-6">
        {/* Left */}
        <div className="z-10 w-full md:w-1/2 flex flex-col text-left -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-34 md:ml-8 lg:ml-12">
          <h1
            className="
              font-gilroyBold text-[#09384D]
              text-[28px]
              sm:text-[34px]
              md:text-[38px]
              lg:text-[62.39px] lg:leading-[1.11]
              lg:max-w-[799px]
              mb-3 sm:mb-4
            "
          >
            <span className="text-[#1EA887]">Your Child Is Leaving</span>
            <br />
            <span className="text-[#1EA887]">for College.</span> We’ll Take
            <br />
            Care of Their Health
            <br />
            When You Can’t.
          </h1>

          <p
            className="
              font-urbanistRegular font-normal text-[#09384D]
              text-[14px] leading-[1.5]
              sm:text-[16px]
              md:text-[18px]
              lg:text-[20px] lg:leading-[1.5] lg:max-w-[627px]
              mb-5 md:mb-6
            "
          >
            24/7 doctor consults, mental health support, annual checkups, and
            accident insurance — all in one affordable plan.
          </p>

          <div
            className="
              flex items-center
              gap-3 sm:gap-4 md:gap-6 lg:gap-[44px]
              mb-5 md:mb-6
            "
          >
            <img
              src={Collage}
              alt="Trusted users"
              className="
                h-[36px] w-auto
                sm:h-[44px]
                md:h-[50px]
                lg:h-[55px] lg:w-[215px]
                rounded-full
              "
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
              className="
                bg-[#1EA887] text-white font-juanaBold font-bold  text-center
                text-[13px] leading-[1.1] px-5 py-2 
                sm:text-[16px] sm:px-6 sm:py-2.5
                md:text-[18px] md:px-7 md:py-3
                lg:text-[24px] lg:w-[250px] lg:h-[64px]
                rounded-full
                shadow-[5px_6px_0_0_#58EE8B4A]
                transition-colors duration-200 hover:bg-[#189D74] cursor-pointer
              "
              style={{ borderRadius: "105px" }}
            >
              Protect My Child
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full md:w-1/2 min-h-[360px] sm:min-h-[420px] md:min-h-[560px] lg:min-h-[800px]  md:mr-8 lg:mr-12">
          <img
            src={HeroImg}
            alt="Student"
            className="
              absolute top-0 right-0
              h-[360px] w-auto
              sm:h-[420px]
              md:h-[560px]
              lg:h-[800px] lg:w-[567px]
              object-contain object-top
              rounded-lg md:rounded-xl
              opacity-100
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
