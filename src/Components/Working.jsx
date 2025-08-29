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
<div className="w-full bg-white px-2 md:px-8 pt-10 pb-0 flex flex-col items-center mt-16">
{/* Heading */}
<div className="text-center mb-7">
<h2 className=" text-[2.25rem] md:text-[40px] md:leading-[45px] font-gilroySemibold md:font-semibold text-[#09384D] mb-1 " >
Healthcare designed around your child’s need
</h2>
<p className=" text-gray-500 md:text-[#09384D] text-[1.09rem] md:text-[20px] md:leading-[150%] mt-1.5 mb-2 font-urbanistRegular " >
How it works?
</p>
</div>


  {/* Main Area */}
  <div className="w-full max-w-[1320px] flex flex-col md:flex-row justify-center items-center md:items-start relative min-h-[445px] mb-2 pt-1 md:pt-2 mt-10">
    {/* Arrow SVG (desktop only) */}
    <img
      src={ArrowSvg}
      alt="Arrow"
      className="
        hidden md:block absolute
        md:left-[300px] lg:left-[340px] xl:left-[240px]
        md:top-[60px] lg:top-[96px] xl:top-[92px]
        md:w-[220px] md:h-[268px]
        lg:w-[235px] lg:h-[282px]
        xl:w-[240px] xl:h-[292.5px]
        pointer-events-none select-none z-0
      "
      // style={{
      //   // show dashed look like Figma using an outline overlay
      //   outline: "1px dashed #000",
      //   outlineOffset: "-6px",
      // }}
    />

    {/* Left Illustration */}
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center pt-0 sm:pt-1 z-10 md:mr-16 mx-auto"
      style={{ minWidth: 350 }}
    >
      <img
        src={LeftBig}
        alt="Child illustration"
        className="
          w-[220px] h-[212px]
          sm:w-[260px] sm:h-[252px]
          md:w-[286px] md:h-[286px]
          lg:w-[300px] lg:h-[300px] lg:ml-[-150px] mt-10
        "
      />
      {/* Mobile-only rotated arrow */}
      <div className="md:hidden w-full flex justify-center mt-2">
        <img
          src={ArrowSvg}
          alt="Flow arrows"
          className="w-[400px] h-[160px] rotate-90 object-contain opacity-95 pointer-events-none select-none sm:w-[380px] sm:h-[118px]"
        />
      </div>
    </div>

    {/* Right Side */}
    <div className="flex flex-col md:ml-[68px] w-full md:max-w-[800px] z-10 mt-[2px] md:mt-0 mx-auto">
      {/* Mobile grid; Desktop: top row of two cards */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-1 md:gap-0">
        {/* Desktop top row (two small cards) */}
        <div className="hidden md:flex md:flex-col lg:flex-row md:gap-4 lg:gap-0 md:mb-4 md:items-stretch w-full">
          {/* Right1 card */}
          <div className="w-full lg:w-1/2 flex">
            <div
              className="
                bg-[#f4f6f8]
                md:rounded-[15.56px] lg:rounded-[18px] xl:rounded-[22px]
                border border-[#e7e7ee]
                shadow-[7px_7px_0px_#231F20]
                md:px-6 lg:px-7 xl:px-8
                md:py-4 lg:py-5 xl:py-6
                flex gap-4 items-start h-full w-full lg:w-[363.40px] lg:h-[155.24px]
              "
            >
              <img
                src={Right1}
                alt="24x7 Care"
                className="
                  md:w-[75px] md:h-[75px]
                  lg:w-[88px] lg:h-[88px]
                  xl:w-[98px] xl:h-[98px]
                  mt-1
                "
              />
              <div>
                <h3
                  className="
                    text-[#1e2d42]
                    font-gilroySemibold md:font-semibold
                    md:text-[13.5px] md:leading-[46.67px]
                    lg:text-[14px]
                    mb-[2px]
                  "
                >
                  24x7 care assistant
                </h3>
                <p
                  className="
                    text- md:text-
                    font-gilroyRegular
                    md:text-[11.41px] md:leading-[17.63px]
                    lg:text-[12px]
                  "
                >
                  Dedicated support to help your child deal in any health emergency
                </p>
              </div>
            </div>
          </div>

          {/* Right2 card */}
          <div className="w-full lg:w-1/2 flex"> <div className=" bg-[#f4f6f8] md:rounded-[15.56px]
           lg:rounded-[18px] xl:rounded-[22px] border border-[#e7e7ee] 
          shadow-[7px_7px_0px_#231F20] md:px-6 lg:px-5 xl:px-4 md:py-4  
          lg:py-5 xl:py-6 flex gap-4 items-start h-full w-full lg:w-[363.40px] lg:h-[155.24px] 
          lg:overflow-hidden " > 
          <img src={Right2} alt="Health Card" className=" md:w-[86px] md:h-[86px] lg:w-[92px] lg:h-[92px] xl:w-[98px] xl:h-[98px] mt-1 flex-shrink-0 " /> <div className="min-w-0"> 
          <h3 className=" font-gilroySemibold md:font-semibold md:text-[13.5px] md:leading-[46.67px] 
           lg:text-[13.48px] lg:leading-[36.67px] mb-[1px] text- lg:max-w-[174px] lg:whitespace-nowrap lg:truncate " 
           title="Health Card & App Access" > Health Card & App Access </h3>

  <p
    className="
      font-gilroyRegular
      md:text-[11.41px] md:leading-[17.63px]
      lg:text-[11.41px] lg:leading-[17.63px]
      text-
      lg:max-w-[189.61px]
      lg:break-words lg:overflow-hidden lg:text-ellipsis lg:line-clamp-4
    "
  >
    A health card enabling cashless treatments across network hospitals and access through a dedicated app to avail benefits
  </p>
</div>
</div> </div>
        </div>

        {/* Mobile small card 1 */}
        <div className="col-span-1 md:hidden">
          <div className="bg-[#f4f6f8] rounded-[18px] border border-[#e7e7ee] shadow-[5px_5px_0px_#231F20] px-3 py-2 grid grid-cols-[56px_1fr] gap-x-2.5 gap-y-1.5 items-start w-full">
            <img src={Right1} alt="24x7 Care" className="w-[52px] h-[52px] mt-0.5 shrink-0 rounded-[8px] object-contain" />
            <h3 className="font-bold text-[#1e2d42] text-[0.86rem] font-gilroySemibold mb-0.5 col-start-2 col-end-3">
              24x7 care assistant
            </h3>
            <p className="text-[#2f3237] text-[0.76rem] leading-[1.28] col-start-1 col-end-3">
              Dedicated support to help your child deal in any health emergency
            </p>
          </div>
        </div>

        {/* Mobile big card */}
        <div className="col-span-1 row-span-2 md:hidden">
          <div className="bg-[#f4f6f8] rounded-[18px] border border-[#e7e7ee] shadow-[5px_5px_0px_#231F20] px-2.5 py-2.5 grid grid-cols-[60px_1fr] gap-x-2.5 gap-y-1.5 items-start w-full">
            <img src={RightBig} alt="Specialist Support" className="w-[58px] h-[58px] mt-0.5 shrink-0 rounded-[8px] object-contain" />
            <h3 className="font-bold text-[#1e2d42] text-[0.86rem] font-gilroySemibold mb-0.5 col-start-2 col-end-3">
              Specialist Support
            </h3>
            <p className="text-[#2f3237] text-[0.76rem] font-gilroyRegular col-start-1 col-end-3">
              Your child’s health is never left to guesswork. Every Mayaa Wellness plan includes personalised care backed by a network of
              <span className="font-bold"> experienced doctors, medical specialists, and wellness experts.</span>
              From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
            </p>
          </div>
        </div>

        {/* Mobile small card 2 */}
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

        {/* Desktop specialist card */}
        <div className="hidden md:block">
         <div className=" bg-[#f4f6f8] md:rounded-[23.1px] lg:rounded-[23.1px] border border-[#e7e7ee] 
         shadow-[7px_7px_0px_#231F20] md:px-6 lg:px-7 xl:px-8 md:py-5
          lg:py-6 xl:py-6 flex gap-6 lg:gap-7 items-start mt-25 min-h-[142px]
           mx-auto lg:w-[569px] lg:h-[231px] lg:mr-120 xl:w-[569px] xl:h-[231px] "
            style={{ width: "100%", maxWidth: "569px" }} >
            <img
              src={RightBig}
              alt="Specialist Support"
              className="
                md:w-[140px] md:h-[140px]
                lg:w-[148px] lg:h-[148px]
                xl:w-[153.31px] xl:h-[153.31px]
                mt-1
              "
            />
            <div className="md:max-w-[460px] lg:max-w-[500px] xl:max-w-[520px]">
              <h3
                className="
                  text-
                  font-gilroySemibold md:font-semibold
                  md:text-[13.5px] md:leading-[46.67px]
                  lg:text-[14px]
                  mb-1
                "
              >
                Specialist Support
              </h3>
              <p
                className="
                  text- font-gilroyRegular
                  md:text-[11.41px] md:leading-[17.63px]
                  lg:text-[12px]
                "
              >
                Your child’s health is never left to guesswork.
                <br />
                Every Mayaa Wellness plan includes personalised care backed by a network of
                <span className="font-bold">
                  {" "}
                  experienced doctors, medical specialists, and wellness experts.
                </span>{" "}
                From general health concerns to specialised support for mental wellness, nutrition, or chronic conditions — our expert panel ensures your child receives the right care, at the right time, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom CTA */}
<div className=" w-full max-w-[1350px] mx-auto mt-35 flex items-center 
justify-between gap-3 md:flex-col lg:flex-row md:items-center lg:items-end
 md:gap-7 lg:gap-[170px] " >
<p className="text-[0.88rem] md:text-[40px] leading-[1.25] md:leading-[45px] text-[#163c4d] font-juanaMedium text-left md:text-center lg:text-left flex-1"> {/* Mobile: natural flow, highlight both Health and Support */} <span className="md:hidden"> Give Your Child the <span className="font-juanaBold font-bold text-[#09384D]">Health</span>{" "} <span className="font-juanaBold font-bold text-[#09384D]">Support</span> You Wish You Had </span>
{/* Desktop/tablet: force two lines, bold/color both words, positions unchanged */}
<span className="hidden md:block">
Give Your Child the{" "}
<span className="md:font-juanaBold md:font-bold md:text-[#09384D]">Health</span>
</span>
<span className="hidden md:block md:font-juanaMedium">
<span className="md:font-juanaBold md:font-bold md:text-[#09384D]">Support</span>
{" "}You Wish You Had
</span>

</p>
<button
onClick={handleAdvisorClick}
className="
bg-[#1EA887] text-white font-juanaBold font-bold
text-[0.74rem] md:text-[24px]
leading-[1.25] md:leading-[1.1]
px-4 md:px-0 py-1.5 md:py-0
rounded-full
shadow-[5px_6px_0_0_#58EE8B4A]
hover:opacity-90 transition-colors
min-w-[112px] md:min-w-[257px]
h-[32px] md:h-[64px]
md:w-[257px]
shrink-0 cursor-pointer
"
style={{ borderRadius: "105px" }}>


Talk to an Advisor
</button> 
  
</div>
</div>
);
};

export default Working;