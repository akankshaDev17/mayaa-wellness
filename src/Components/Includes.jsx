import React from "react";
import hospitalization from "../assets/1.webp";
import consultation from "../assets/2.webp";
import health from "../assets/3.webp";
import mental from "../assets/4.webp";
import docCall from "../assets/5.webp";

function Includes() {
  const items = [
    {
      title: "Cashless Hospitalization",
      desc: "20,000+ hospitals across India with seamless cashless admission.",
      textColor: "text-[#1BA88E]",
      paraColor: "text-[#1BA88E]",
      bgColor: "bg-[#E0F7F4]",
      imgCircle: "bg-[#009479]",
      icon:<img src={hospitalization} alt="Hospitalization" className="w-14 h-14"/>
    },
    {
      title: "Free OPD Consultations",
      desc: "In-person consultations with doctors, specialists, and general physicians.",
      textColor: "text-[#D88F00]",
      paraColor: "text-[#D88F00]",
      bgColor: "bg-[#FFF9E5]",
      imgCircle: "bg-[#F0F6C2]",
      icon: <img src={consultation} alt="Consultation" className="w-12 h-12" />,
    },
    {
      title: "Free Annual Health Test",
      desc: "In-person consultations with doctors, specialists, and general physicians.",
      textColor: "text-[#D75C5C]",
      paraColor: "text-[#D75C5C]",
      bgColor: "bg-[#FCEEEF]",
      imgCircle: "bg-[#FFB3B8]",
      icon: <img src={health} alt="Health Test" className="w-10 h-10" />,
    },
    {
      title: "Mental Health Support",
      desc: "24x7 unlimited teleconsultations with top mental health experts.",
      textColor: "text-[#7B5CD7]",
      paraColor: "text-[#855CD7]",
      bgColor: "bg-[#E9E6FF]",
      imgCircle: "bg-[#C5AAFB]",
      icon: <img src={mental} alt="Mental Health" className="w-10 h-10" />,
    },
    {
      title: "24x7 Doctor On-call",
      desc: "Instant and unlimited video or phone consultations with doctors anytime, anywhere.",
      textColor: "text-[#4593FE]",
      paraColor: "text-[#4593FE]",
      bgColor: "bg-[#E5F0FF]",
      imgCircle: "bg-[#8FBFFF]",
      icon: <img src={docCall} alt="Doctor On-call" className="mt-2 w-12 h-12" />,
    },
  ];

  const loopItems = [...items, ...items];

  return (
    <section className="py-10 px-4 md:px-16 overflow-hidden">
      <div className="text-left">
        <h1 className="font-gilroySemiBold text-xl sm:text-3xl font-bold text-[#09384D]">
          What's Included?
        </h1>
        <p className="text-[#09384D] sm:text-lg text-sm mt-2 font-urbanistRegular">
          Everything Your Child Needs, All in One Health Plan
        </p>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-6 rounded-2xl flex flex-col justify-between `}
          >
            <h3 className={`text-lg font-urbanistBold ${item.textColor} mb-2`}>
              {item.title}
            </h3>
            <p className={`text-sm font-urbanistRegular ${item.paraColor}`}>
              {item.desc}
            </p>
            <div className="mt-4 flex justify-start xl:justify-end">
              <div
                className={`w-16 h-16 rounded-full ${item.imgCircle} flex items-center justify-center`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden  relative">
        <div className="flex animate-carousel gap-2 items-stretch">
          {loopItems.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} flex-shrink-0 w-[50%] p-4 rounded-2xl flex flex-col justify-between`}
            >
              <h3
                className={`text-sm font-urbanistBold ${item.textColor} mb-1`}
              >
                {item.title}
              </h3>
              <p className={`text-xs font-urbanistRegular ${item.paraColor}`}>
                {item.desc}
              </p>
              <div className="mt-3 flex justify-end">
                <div
                  className={`w-18 h-16 rounded-full ${item.imgCircle} flex items-center justify-center`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-10 border-gray-200" />
    </section>
  );
}

export default Includes;
