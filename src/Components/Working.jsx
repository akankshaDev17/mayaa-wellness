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
      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-[2.25rem] md:text-[2.8rem] font-extrabold font-gilroySemibold text-[#194260] tracking-tight mb-1 leading-tight">
          Healthcare designed around your child’s need
        </h2>
        <p className="text-gray-500 text-[1.09rem] mt-1.5 mb-2 font-urbanistRegular">How it works?</p>
      </div>

      {/* Main Area */}
      <div className="w-full max-w-[1320px] flex flex-col md:flex-row justify-center items-center md:items-start relative min-h-[445px] mb-2 pt-2">
        {/* Arrow SVG */}
        <img
          src={ArrowSvg}
          alt="Arrow"
          className="hidden md:block absolute left-[250px] top-[92px] w-[255px] h-[250px] pointer-events-none select-none z-0"
        />

        {/* Left Illustration */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center pt-2 z-10 md:mr-16 mx-auto" style={{ minWidth: 350 }}>
          <img src={LeftBig} alt="Child illustration" className="w-[300px] h-[290px] mx-auto" />
        </div>

        {/* Right Cards */}
        <div className="flex flex-col md:ml-[68px] w-full md:max-w-[800px] z-10 mt-[2px] md:mt-0 mx-auto">
          {/* Top Row (two cards, always equal width/height, stacked on mobile) */}
          <div className="flex flex-col lg:flex-row gap-7 mb-4 items-center lg:items-stretch w-full">
            <div className="w-full lg:w-1/2 flex">
              <div className="bg-[#f4f6f8] rounded-[22px] border border-[#e7e7ee] shadow-[7px_7px_0px_#231F20] px-8 py-6 flex gap-4 items-start h-full w-full">
                <img src={Right1} alt="24x7 Care" className="w-[98px] h-[98px] mt-1" />
                <div>
                  <h3 className="font-bold mb-[2px] text-[#1e2d42] text-[1.12rem] leading-tight font-gilroySemibold">
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
                  <h3 className="font-bold mb-[2px] text-[#1e2d42] text-[1.12rem] leading-tight font-gilroySemibold">
                    Health Card & App Access
                  </h3>
                  <p className="text-[#2f3237] text-[1rem] font-gilroyRegular">
                    A health card enabling cashless treatments across network hospitals and access through a dedicated app to avail benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Specialist Support Card */}
          <div className="bg-[#f4f6f8] rounded-[22px] border border-[#e7e7ee] shadow-[7px_7px_0px_#231F20] px-8 py-6 flex gap-7 items-start mt-1 min-h-[142px] mx-auto">
            <img src={RightBig} alt="Specialist Support" className="w-[134px] h-[134px] mt-1" />
            <div>
              <h3 className="font-bold mb-1 text-[#1e2d42] text-[1.12rem] font-gilroySemibold">Specialist Support</h3>
              <p className="text-[#2f3237] text-[1rem] font-gilroyRegular">
                Your child’s health is never left to guesswork.<br />
                Every Mayaa Wellness plan includes personalised care backed by a network of
                <span className="font-bold"> experienced doctors, medical specialists, and wellness experts.</span>
                From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - break exactly as in screenshot, responsive and big gap on desktop */}
      <div className="w-full max-w-[1350px] mx-auto mt-14 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-7 lg:gap-[170px]">
        <p className="text-[2.18rem] leading-snug text-[#163c4d] font-juanaBold font-normal text-center lg:text-left w-full lg:w-auto">
          Give Your Child the Health <span className="font-extrabold text-[#194260]"> Support</span><br />
          You Wish You Had
        </p>
        <button
          onClick={handleAdvisorClick}
          className="bg-[#06D6A0] text-white font-juanaBold font-bold text-xl px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-all min-w-[257px] h-[58px] flex items-center justify-center cursor-pointer mx-auto lg:mx-0"
          style={{ fontFamily: "'Georgia',serif" }}
        >
          Talk to an Advisor
        </button>
      </div>
    </div>
  );
};

export default Working;