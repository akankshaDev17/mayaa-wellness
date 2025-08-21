import React from "react";
import LeftBig from "../assets/LeftBig.webp";
import Right1 from "../assets/Right1.webp";
import Right2 from "../assets/Right2.webp";
import RightBig from "../assets/RightBig.webp";
import ArrowSvg from "../assets/Group.svg";

const Working = () => {
  const handleAdvisorClick = () => {
    console.log("Talk to advisor");
  };

  return (
    <div className="w-full bg-white px-2 md:px-8 pt-10 pb-0 flex flex-col items-center">
      {/* Heading (desktop unchanged) */}
      <div className="text-center mb-7">
        <h2 className="text-[2.25rem] md:text-[2.8rem]  font-gilroySemibold text-[#194260]  mb-1 ">
          Healthcare designed around your child’s need
        </h2>
        <p className="text-gray-500 text-[1.09rem] mt-1.5 mb-2 font-urbanistRegular">How it works?</p>
      </div>

      {/* Main Area */}
  <div className="w-full max-w-[1320px] flex flex-col md:flex-row justify-center items-center md:items-start relative min-h-[445px] mb-2 pt-1 md:pt-2">
        {/* Arrow SVG (desktop only) */}
        <img
          src={ArrowSvg}
          alt="Arrow"
          className="hidden md:block absolute left-[250px] top-[92px] w-[255px] h-[250px] pointer-events-none select-none z-0"
        />

        {/* Left Illustration (desktop unchanged) */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center pt-0 sm:pt-1 z-10 md:mr-16 mx-auto" style={{ minWidth: 350 }} >
         <img src={LeftBig} alt="Child illustration" className="w-[220px] h-[212px] mx-auto sm:w-[260px] sm:h-[252px] md:w-[300px] md:h-[290px]" />
          {/* Mobile-only rotated arrow */}
          <div className="md:hidden w-full flex justify-center mt-2">
           <img src={ArrowSvg} alt="Flow arrows" className="w-[400px] h-[160px] rotate-90 object-contain opacity-95 pointer-events-none select-none sm:w-[380px] sm:h-[118px]" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:ml-[68px] w-full md:max-w-[800px] z-10 mt-[2px] md:mt-0 mx-auto">
          {/* Mobile: grid; Desktop: original flex column with top row of two cards */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-1 md:gap-0">
            {/* Desktop top row wrapper (visible only on md+) */}
            <div className="hidden md:flex md:flex-col lg:flex-row md:gap-7 md:mb-4 md:items-center lg:items-stretch w-full">
              <div className="w-full lg:w-1/2 flex">
                <div className="bg-[#f4f6f8] rounded-[22px] border border-[#e7e7ee] shadow-[7px_7px_0px_#231F20] px-8 py-6 flex gap-4 items-start h-full w-full">
                  <img src={Right1} alt="24x7 Care" className="w-[98px] h-[98px] mt-1" />
                  <div>
                    <h3 className=" mb-[2px] text-[#1e2d42] font-bold text-[1.12rem] font-gilroySemibold">
                      24x7 care assistant
                    </h3>
                    <p className="text-[#2f3237] text-[1rem] font-gilroyRegular">
                      Dedicated support to help your child deal in any health emergency
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="bg-[#f4f6f8] rounded-[22px] border border-[#e7e7ee] shadow-[7px_7px_0px_#231F20] px-8 py-6 flex gap-4 items-start h-full w-full">
                  <img src={Right2} alt="Health Card" className="w-[98px] h-[98px] mt-1" />
                  <div>
                    <h3 className="font-bold mb-[2px] text-[#1e2d42] text-[1.12rem] font-gilroySemibold">
                      Health Card & App Access
                    </h3>
                    <p className="text-[#2f3237] text-[1rem] font-gilroyRegular">
                      A health card enabling cashless treatments across network hospitals and access through a dedicated app to avail benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile small card 1 (col 1, row 1) */}
            <div className="col-span-1 md:hidden">
              <div className="bg-[#f4f6f8] rounded-[18px] border border-[#e7e7ee] shadow-[5px_5px_0px_#231F20] px-3 py-2 grid grid-cols-[56px_1fr] gap-x-2.5 gap-y-1.5 items-start w-full">
                <img src={Right1} alt="24x7 Care" className="w-[52px] h-[52px] mt-0.5 shrink-0 rounded-[8px] object-contain" />
                <h3 className="font-bold text-[#1e2d42] text-[0.86rem]  font-gilroySemibold mb-0.5 col-start-2 col-end-3">
                  24x7 care assistant
                </h3>
                <p className="text-[#2f3237] text-[0.76rem] leading-[1.28] col-start-1 col-end-3">
                  Dedicated support to help your child deal in any health emergency
                </p>
              </div>
            </div>

            {/* Mobile big card (col 2, spans 2 rows) */}
            <div className="col-span-1 row-span-2 md:hidden">
              <div className="bg-[#f4f6f8] rounded-[18px] border border-[#e7e7ee] shadow-[5px_5px_0px_#231F20] px-2.5 py-2.5 grid grid-cols-[60px_1fr] gap-x-2.5 gap-y-1.5 items-start w-full">
                <img src={RightBig} alt="Specialist Support" className="w-[58px] h-[58px] mt-0.5 shrink-0 rounded-[8px] object-contain" />
                <h3 className="font-bold text-[#1e2d42] text-[0.86rem]  font-gilroySemibold mb-0.5 col-start-2 col-end-3">
                  Specialist Support
                </h3>
                <p className="text-[#2f3237] text-[0.76rem] font-gilroyRegular  col-start-1 col-end-3">
                  Your child’s health is never left to guesswork.
                  Every Mayaa Wellness plan includes personalised care backed by a network of
                  <span className="font-bold"> experienced doctors, medical specialists, and wellness experts.</span>
                  From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
                </p>
              </div>
            </div>

            {/* Mobile small card 2 (col 1, row 2) */}
            <div className="col-span-1 md:hidden">
              <div className="bg-[#f4f6f8] rounded-[18px] border border-[#e7e7ee] shadow-[5px_5px_0px_#231F20] px-3 py-2 grid grid-cols-[56px_1fr] gap-x-2.5 gap-y-1.5 items-start w-full">
                <img src={Right2} alt="Health Card" className="w-[52px] h-[52px] mt-0.5 shrink-0 rounded-[8px] object-contain" />
                <h3 className="font-bold text-[#1e2d42] text-[0.86rem] leading-tight font-gilroySemibold mb-0.5 col-start-2 col-end-3">
                  Health Card & App Access
                </h3>
                <p className="text-[#2f3237] text-[0.76rem] leading-[1.28] col-start-1 col-end-3">
                  A health card enabling cashless treatments across network hospitals and access through a dedicated app to avail benefits
                </p>
              </div>
            </div>

            {/* Desktop specialist card (visible only on md+) */}
            <div className="hidden md:block">
              <div className="bg-[#f4f6f8] rounded-[22px] border border-[#e7e7ee] shadow-[7px_7px_0px_#231F20] px-8 py-6 flex gap-7 items-start mt-1 min-h-[142px] mx-auto">
                <img src={RightBig} alt="Specialist Support" className="w-[134px] h-[134px] mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-[#1e2d42] text-[1.12rem] font-gilroySemibold">Specialist Support</h3>
                  <p className="text-[#2f3237] text-[1rem] font-gilroyRegular">
                    Your child’s health is never left to guesswork.
                    <br />
                    Every Mayaa Wellness plan includes personalised care backed by a network of
                    <span className="font-bold"> experienced doctors, medical specialists, and wellness experts.</span>
                    From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA (desktop unchanged; minor mobile scale only) */}
      {/* Bottom CTA – desktop unchanged; mobile tightened only */}
{/* Bottom CTA — side‑by‑side on mobile, original on desktop */}
<div className="
  w-full max-w-[1350px] mx-auto mt-14
  flex items-center justify-between
  gap-3
  md:flex-col md:lg:flex-row md:items-center md:lg:items-end md:justify-between md:gap-7 lg:gap-[170px]
">
  {/* Headline: allow it to take remaining width on mobile */}
  
<p className="
  text-[0.88rem] md:text-[2.18rem]
  leading-[1.25] md:leading-snug
  text-[#163c4d] font-juanaBold font-Bold
  text-left md:text-center lg:text-left
  flex-1
">
  <span className="block md:inline lg:block !block lg:!block">
    Give Your Child the Health
  </span>
  <span className="block md:inline lg:block !block lg:!block">
    {" "}Support You Wish You Had
  </span>
</p>



  {/* Button: keep size, prevent shrinking, sit to the right on mobile */}
<button
  onClick={handleAdvisorClick}
  className="
    bg-[#06D6A0] text-white font-juanaBold font-bold
    text-[0.74rem] md:text-xl
    px-4 md:px-8 py-1.5 md:py-3
    rounded-full shadow-lg hover:opacity-90 transition-all
    min-w-[112px] md:min-w-[257px] h-[32px] md:h-[58px]
    shrink-0 cursor-pointer
  "
  style={{ fontFamily: "'Georgia',serif" }}
>
  Talk to an Advisor
</button>

</div>

</div>
  );
};

export default Working;