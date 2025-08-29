// src/components/Pop.jsx
// Fixes:
// 1) Force “Starting at” on line 1 and “just ₹75/month” on line 2.
// 2) Ensure icons render in their natural colors (no black tint/filters).

import React from "react";
import Pop1 from "../assets/pop1.png";
import Pop2 from "../assets/pop2.png";
import Pop3 from "../assets/pop3.png";

const Pop = () => {
  const handleBookCall = () => {
    console.log("book a free call");
  };

  return (
    <section className="w-full flex justify-center">
      {/* DESKTOP (unchanged) */}
      <div className="hidden md:flex">
        <div
          className="
            relative z-20
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
          <button
            onClick={handleBookCall}
            className="
              relative grid place-items-center
              w-[234px] h-[64px]
              rounded-[105px]
              bg-[#09384D] text-white
              shadow-[5px_6px_0px_0px_#22ABBE4A] cursor-pointer
            "
          >
            <span className="font-juanaBold text-[24px] leading-[1.10]">
              Book a Free Call
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden w-full px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Card 1 */}
          <div
            className="
              flex items-center gap-2
              w-[120.47px] h-[45.44px]
              bg-white rounded-[3.43px]
              shadow-[0px_3.83px_12.8px_3.77px_#0000001A]
              px-2
            "
          >
            <img
              src={Pop1}
              alt="Starting at"
              className="w-[19px] h-[24px] object-contain"
              style={{
                filter: "none",
                WebkitFilter: "none",
                mixBlendMode: "normal",
              }}
              draggable={false}
            />
            <p className="font-gilroySemiBold text-[#09384D] text-[10.92px] leading-[13.8px]">
              {/* Force two lines explicitly */}
              <span className="block whitespace-nowrap">Starting at</span>
              <span className="block whitespace-nowrap">just ₹75/month</span>
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              flex items-center gap-2
              w-[115.47px] h-[45.44px]
              bg-white rounded-[3.43px]
              shadow-[0px_3.83px_12.8px_3.77px_#0000001A]
              px-2
            "
          >
            <img
              src={Pop2}
              alt="Pan‑India"
              className="w-[17px] h-[21px] object-contain"
              style={{
                filter: "none",
                WebkitFilter: "none",
                mixBlendMode: "normal",
              }}
              draggable={false}
            />
            <p className="font-gilroySemiBold text-[#09384D] text-[10.09px] leading-[13.79px]">
              <span className="block whitespace-nowrap">Pan‑India</span>
              <span className="block whitespace-nowrap">Coverage</span>
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              flex items-center gap-2
              w-[115.47px] h-[45.44px]
              bg-white rounded-[3.43px]
              shadow-[0px_3.83px_12.8px_3.77px_#0000001A]
              px-2
            "
          >
            <img
              src={Pop3}
              alt="Claims Settled"
              className="w-[18px] h-[23px] object-contain"
              style={{
                filter: "none",
                WebkitFilter: "none",
                mixBlendMode: "normal",
              }}
              draggable={false}
            />
            <p className="font-gilroySemiBold text-[#09384D] text-[10.09px] leading-[13.79px]">
              <span className="block whitespace-nowrap">99% Claims</span>
              <span className="block whitespace-nowrap">Settled</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pop;
