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
        -mt-12 md:-mt-16 lg:-mt-20 /* smaller overlap with Hero */
        mb-[-32px] /* still overlaps Trusted slightly */
        z-20
      "
    >
      <div 
        className="
          bg-white shadow-lg rounded-2xl 
          py-8 md:py-10 px-8 md:px-12 
          flex flex-col md:flex-row md:items-center md:justify-between 
          gap-8 md:gap-12 w-full max-w-7xl
        "
        style={{ minHeight: "130px" }}
      >
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <p className="text-xl sm:text-2xl md:text-3xl font- text-gray-900 font-gilroySemiBold ">
            Starting at <br className="hidden sm:block" /> just ₹75/month
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <p className="text-xl sm:text-2xl md:text-3xl font-gilroySemiBold text-gray-900 ">
            Pan-India <br className="hidden sm:block" /> Coverage
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <p className="text-xl sm:text-2xl md:text-3xl font-gilroySemiBold text-gray-900 ">
            99% Claims <br className="hidden sm:block" /> Settled
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end flex-1">
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