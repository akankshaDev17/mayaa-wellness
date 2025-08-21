import React from "react";

const Pop = () => {
  const handleBookCall = () => {
    console.log("book a free call");
  };

  return (
    <div
      className="
        w-full flex justify-center px-4 
        relative 
        md:-mt-16 lg:-mt-20 -mt-0 /*  no overlap on mobile, keep overlap on desktop */
        mb-[-32px] 
        z-20
         w-full flex justify-center px-4 
+   relative 
+   mt-5 md:-mt-16 lg:-mt-20 /*  more gap on mobile, overlap only on desktop */
+   mb-[-32px] 
+   z-20
      "
    >
      <div
        className="
          bg-white shadow-lg rounded-2xl 
          py-6 md:py-10 px-6 md:px-12 
          flex flex-col md:flex-row md:items-center md:justify-between 
          gap-6 md:gap-12 w-full max-w-7xl
          border md:border-0 /* ✅ border only on mobile */
        "
        style={{ minHeight: "130px" }}
      >
        {/* Mobile Layout */}
        <div className="flex flex-col w-full md:hidden">
          {/* Features in one row */}
          <div className="flex justify-between text-center mb-4">
            <p className="text-sm xs:text-base sm:text-lg font-gilroySemiBold text-gray-900">
              Starting at <br /> just ₹75/month
            </p>
            <p className="text-sm xs:text-base sm:text-lg font-gilroySemiBold text-gray-900">
              99% Claims <br /> Settled
            </p>
            <p className="text-sm xs:text-base sm:text-lg font-gilroySemiBold text-gray-900">
              Pan-India <br /> Coverage
            </p>
          </div>
          {/* Button below */}
          <button
            onClick={handleBookCall}
            className="bg-[#073B4C] hover:bg-[#05505C] transition text-white font-juanaBold py-3 px-8 rounded-full shadow-md text-base sm:text-lg cursor-pointer font-juanaBold"
          >
            Book a Free Call
          </button>
        </div>

        {/* Desktop Layout (unchanged from your code) */}
        <div className="hidden md:flex flex-1 flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl font-gilroySemiBold text-gray-900">
            Starting at <br className="hidden sm:block" /> just ₹75/month
          </p>
        </div>

        <div className="hidden md:flex flex-1 flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl font-gilroySemiBold text-gray-900">
            Pan-India <br className="hidden sm:block" /> Coverage
          </p>
        </div>

        <div className="hidden md:flex flex-1 flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl font-gilroySemiBold text-gray-900">
            99% Claims <br className="hidden sm:block" /> Settled
          </p>
        </div>

        <div className="hidden md:flex justify-center md:justify-end flex-1">
          <button
            onClick={handleBookCall}
            className="bg-[#073B4C] hover:bg-[#05505C] transition text-white font-bold py-3 px-8 rounded-full shadow-md text-base sm:text-lg md:text-xl cursor-pointer font-juanaBold"
          >
            Book a Free Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pop;
