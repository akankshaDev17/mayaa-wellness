import React, { useState, useEffect } from "react";
import { Check, Minus } from "lucide-react";
import Pointer from "../assets/Pointer.webp";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Diamond",
    price: "₹2999",
    sumInsured: "₹3,00,000",
    tagline: "Includes wellness+ benefits 💗",
    taglineBg: ["bg-[#349C4B]"],
    bgColor: "bg-green-200",
    border: "border",
    headerBg: "bg-gray-600",
    features: [true,true,true,true,true,true,true,true,true,true,true,true,true],
  },
  {
    name: "Plus",
    price: "₹2499",
    sumInsured: "₹2,00,000",
    tagline: "Includes wellness+ benefits 💗",
    taglineBg: ["bg-[#349C4B]"],
    bgColor: "bg-white",
    border: "border",
    headerBg: "bg-white border",
    features: [true,true,true,true,true,true,true,true,true,true,true,true,true],
  },
  {
    name: "Enhanced",
    price: "₹1499",
    sumInsured: "₹1,00,000",
    tagline: "Includes basic wellness benefits 💗",
    taglineBg: ["bg-[#34559C]"],
    bgColor: "bg-white",
    border: "border",
    headerBg: "bg-blue-600",
    features: [true,true,true,true,true,true,true,true,true,true,true,true,false],
  },
  {
    name: "Starter",
    price: "₹899",
    sumInsured: "₹50,000",
    tagline: "",
    bgColor: "bg-white",
    headerBg: "bg-white border",
    features: [true,true,true,true,true,true,true,true,false,false,false,false,false],
  },
];

const featuresList = [
  "Sum Insured",
  "Cashless Treatment & Reimbursement Options",
  "Pre-existing disease cover",
  "Chronic illness Day1 cover",
  "Modern treatments",
  "Surgical Expenses",
  "Ambulance Cover",
  "Pre & Post hospitalization expenses",
  "Full body 61-parameter health test",
  "24x7 unlimited teleconsultations with specialist doctors and general physicians",
  "Unlimited mental health consultations",
  "Unlimited diet plans",
  "OPD consultations",
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const navigateTo = useNavigate();

  const handlePlanSelect = (index) => {
    setSelectedPlan(index);
    console.log(
      `${plans[index].name} plan selected, Price: ${plans[index].price}`
    );
  };

  const handleCheckout = () => {
    console.log(`Navigating to checkout for ${plans[selectedPlan].name}`);
    navigateTo(`/checkout/${plans[selectedPlan].name}`);
  };

  // useEffect(() => {
  //   console.log(
  //     `${plans[selectedPlan].name} plan selected, Price: ${plans[selectedPlan].price}`
  //   );
  // }, []);

  return (
    <>
      <div className="text-center sm:mb-24 mb-8">
        <h1 className="text-4xl font-semibold text-[#0B2110] mb-2">
          Your Health, Your Plan{" "}
          <span className="block sm:hidden text-[#31B07B] text-4xl font-semibold">
            <span className="text-[#0B2110]">—</span> at the
          </span>
          <span className="hidden sm:inline text-[#31B07B] text-4xl font-semibold">
            <span className="text-[#0B2110]">—</span> at the
          </span>
        </h1>
        <h1 className="text-4xl font-semibold text-[#31B07B]">Right Price</h1>
      </div>

      {/* <div className="xl:ml-[35.5rem] sm:ml-[17.2rem] hidden xl:block">
        <button className="bg-[#F7FF0D] p-1 px-10 ">
          Most Popular
        </button>
      </div> */}

      <div className="relative w-full max-w-6xl mx-auto p-10 rounded-3xl bg-[#F3F3F3]">
        <div className=" rounded-lg  overflow-hidden  mb-[-2.5rem]">
          <div className="overflow-x-auto mt-[-1rem] ">
            <table className="w-full ">
              <thead className="border-b border-[#000000]">
                <tr>
                  <th className="bg-[#F3F3F3] text-[#09384D] font-gilroySemiBold p-2 text-left font-bold sm:text-3xl text-2xl border-r border-gray-200">
                    Plan Description
                  </th>
                  {plans.map((plan, i) => (
                    <th
                      key={i}
                      className={`p-0  cursor-pointer transition-all duration-200 }`}
                      onClick={() => handlePlanSelect(i)}
                    >
                      {i === 0 && (
                        <div className="absolute mt-[-3rem] hidden lg:block">
                          <span className="bg-[#F7FF0D] text-black font-gilroyMedium text-sm  p-1 px-10 rounded-md shadow-md">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div
                        className={`p-3 text-white 
                        } transition-all duration-200`}
                      >
                        <div className="p-2">
                          <button
                            className={`font-gilroyBold cursor-pointer text-lg px-4 py-2 rounded-xl w-32 text-center
                                        ${
                                          selectedPlan === i
                                            ? `text-[#FFFFFF] bg-[#616161]`
                                            : `text-[#000000] bg-[#F3F3F]`
                                        }   ${plan.border}`}
                          >
                            {plan.name}
                          </button>
                        </div>

                        {plan.tagline && (
                          <div
                            className={`mt-1 mb-[-0.8rem] font-gilroyMedium text-[15px] text-center text-white ml-[-0.6rem] mr-[-0.6rem] rounded-t-2xl 
                                        ${plan.taglineBg}`}
                          >
                            {plan.tagline}
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {featuresList.map((feature, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-100">
                    <td className="p-4 text-left font-gilroyMedium border-r border-gray-200 bg-[#F3F3F3]">
                      {feature}
                    </td>
                    {plans.map((plan, colIndex) => (
                      <td
                        key={colIndex}
                        className={`p-4  text-center transition-all duration-200 ${
                          selectedPlan === colIndex
                            ? "bg-[#CFFFD9]"
                            : "bg-[#F0F0F0]"
                        }`}
                      >
                        {rowIndex === 0 ? (
                          <span className="font-bold text-lg">
                            {plan.sumInsured}
                          </span>
                        ) : plan.features[rowIndex] ? (
                          <Check
                            className="mx-auto text-[#CFFFD9] bg-[#349C4B] rounded-full p-1"
                            size={24}
                          />
                        ) : (
                          <Minus
                            className="mx-auto text-gray-400 bg-gray-200 rounded-full p-1"
                            size={24}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                <tr className="">
                  <td className="p-4 text-left font-gilroyBold text-lg border-r border-gray-200 bg-[#F3F3F3]">
                    Price / year
                  </td>
                  {plans.map((plan, i) => (
                    <td
                      key={i}
                      className={`p-4 text-center transition-all duration-200 ${
                        selectedPlan === i ? "bg-[#CFFFD9]" : "bg-[#F0F0F0]"
                      }`}
                    >
                      <span className="font-gilroyBold text-2xl text-[#000000]">
                        {plan.price}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="relative px-10 py-4 bg-[#0B3A4E] text-white font-juanaBold text-xl 
                    rounded-full shadow-[8px_8px_0px_0px_#B7EAF3] flex items-center gap-3
                     mb-9 mt-9 cursor-pointer"
          onClick={handleCheckout}
        >
          Protect My Child
          <img src={Pointer} alt="Pointer" className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
