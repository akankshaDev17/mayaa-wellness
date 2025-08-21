import React, { useState, useEffect } from "react";
import { FaUserAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";
import HeroImg from "../assets/Hero.webp";
import Collage from "../assets/Collage.webp";

const Hero = () => {
  return (
    <section className="relative bg-[#E8F8F5] overflow-hidden">
      <div
        className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
        style={{
          background: "linear-gradient(135deg, #1BBE83, #24D490)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto flex flex-row items-center justify-between py-4 md:py-10 px-3 sm:px-6">
        {/* Left side content */}
        <div className="w-1/2 z-10 flex flex-col justify-start text-center md:text-left px-2 sm:px-4">
          <h1 className="text-base sm:text-xl md:text-5xl mb-2 sm:mb-4 font-gilroyBold ">
            <span className="text-[#1BBE83]">
              Your Child Is Leaving for College.
            </span>{" "}
            We’ll Take Care of Their Health When You Can’t.
          </h1>
          <p className="hidden md:block text-gray-700 text-base md:text-lg mb-5 font-urbanistRegular">
            24/7 doctor consults, mental health support, annual checkups, and{" "}
            <br /> accident insurance — all in one affordable plan.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4 mb-4 sm:mb-6">
            <img
              src={Collage}
              alt="Trusted users"
              className="w-16 sm:w-20 md:w-28 h-auto rounded-full"
            />
            <p className="hidden md:block text-gray-800 font-urbanistRegular">
              Trusted by <span className="font-bold">10,000 +</span> parents
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => console.log("protect my child")}
              className="bg-[#1BBE83] hover:bg-[#16a76f] text-white font-juanaBold 
             px-3 py-1 text-[10px]          
             sm:px-5 sm:py-2 sm:text-sm     
             md:px-8 md:py-3 md:text-lg   
             rounded-full transition duration-200 shadow-md cursor-pointer"
            >
              Protect My Child
            </button>
          </div>
        </div>

        {/* Right side image and form */}
        <div className="w-[85%] mx-auto md:w-1/2 relative min-h-[300px] sm:min-h-[340px] md:min-h-[600px]">
          <img
            src={HeroImg}
            alt="Student"
            className="absolute inset-0 h-full w-full
           object-contain object-top
           rounded-lg md:rounded-xl
           mt-10 sm:mt-0
           md:translate-x-[35px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
