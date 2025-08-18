import React from "react";
import hospitalization from "../assets/1.webp";
import consultation from "../assets/2.webp";
import health from "../assets/3.webp";
import mental from "../assets/4.webp";
import docCall from "../assets/5.webp"

function Includes() {
  const items = [
    {
      title: "Cashless Hospitalization",
      desc: "20,000+ hospitals across India with seamless cashless admission.",
      fontFamily: "Urbanist",
      textColor: "text-[#1BA88E]",
      paraColor: "tet-[#1BA88E]",
      bgColor: "bg-[#E0F7F4]",
      imgCircle: "bg-[#009479]",
      icon: <img src={hospitalization} alt="Hospitalization" className="w-15 h-18 mb-3 text-[#E0F7F4]" />,
    },
    {
      title: "Free OPD Consultations",
      desc: "In-person consultations with doctors, specialists, and general physicians.",
      fontFamily: "Urbanist",
      textColor: "text-[#D88F00]",
      paraColor: "text-[#D88F00]",
      bgColor: "bg-[#FFF9E5]",
      imgCircle: "bg-[#F0F6C2]",
      icon: <img src={consultation} alt="Consultation" className="w-12 h-15 mb-3 text-[#FFA616]" />,
    },
    {
      title: "Free Annual Health Test",
      desc: "In-person consultations with doctors, specialists, and general physicians.",
      fontFamily: "Urbanist",
      textColor: "text-[#D75C5C]",
      paraColor: "text-[#D75C5C]",
      bgColor: "bg-[#FCEEEF]",
      imgCircle: "bg-[#FFB3B8]",
      icon: <img src={health} alt="Health Test" className="w-10 h-13 mb-3 text-[#D75C5C]" />,
    },
    {
      title: "Mental Health Support",
      desc: "24x7 unlimited teleconsultations with top mental health experts.",
      fontFamily: "Urbanist",
      textColor: "text-[#7B5CD7]",
      paraColor: "text-[#855CD7]",
      bgColor: "bg-[#E9E6FF]",
      imgCircle: "bg-[#C5AAFB]",
      icon: <img src={mental} alt="Mental Health" className="w-10 h-12 mb-3 text-[#582EE5]" />,
    },
    {
      title: "24x7 Doctor On-call",
      desc: "Instant and unlimited video or phone consultations with doctors and specialists anytime, anywhere.",
      fontFamily: "Urbanist",
      textColor: "text-[#4593FE]",
      paraColor: "text-[#4593FE]",
      bgColor: "bg-[#E5F0FF]",
      imgCircle: "bg-[#8FBFFF]",
      icon: <img src={docCall} alt="Doctor On-call" className="w-12 h-15 text-[#1276FF] " />,
    },
  ];

  return (
    <section className="py-10 px-4 md:px-16">
      <div className="text-center md:text-left">
        <h1 className="font-gilroySemiBold text-3xl font-bold text-[#09384D]">What's Included?</h1>
        <p className="text-09384D mt-2 font-urbanistRegular">
          Everything Your Child Needs, All in One Health Plan
        </p>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-6 rounded-tr-[35px] rounded-br-[35px] rounded-tl-xl rounded-bl-xl flex flex-col justify-between text-center md:text-left `}
          >
            <div>
              <h3 className={`text-lg font-urbanistBold ${item.textColor} mb-2`}>
                {item.title}
              </h3>
              <p className={`text-sm font-urbanistRegular ${item.paraColor} `}>{item.desc}</p>
            </div>
            <div className="mt-4 flex justify-center md:justify-start xl:justify-end ">
              <div className={`w-20 h-20 rounded-full ${item.imgCircle} xl:mt-[-1rem] xl:mr-[1rem]`}>
                    <div className="flex items-center justify-center w-full h-full mt-2 ">
                      {item.icon}
                    </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-200" />
    </section>
  );
}

export default Includes;
