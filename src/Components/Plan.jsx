import React, { useState } from "react";
import { Check, Minus } from "lucide-react";

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
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
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
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
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
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
    ],
  },
  {
    name: "Starter",
    price: "₹899",
    sumInsured: "₹50,000",
    tagline: "",
    bgColor: "bg-white",
    headerBg: "bg-white border",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
    ],
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

  const handlePlanSelect = (index) => {
    setSelectedPlan(index);
    console.log(`${plans[index].name} plan selected, Price: ${plans[index].price}`);
  };



  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#0B2110] mb-2">
          Your Health, Your Plan —{" "}
          <span className="text-[#31B07B] text-4xl font-semibold">at the </span>
        </h1>
        <h1 className="text-4xl font-semibold text-[#31B07B]">Right Price</h1>
      </div>

      <div className="xl:ml-[35.5rem] sm:ml-[17.2rem] hidden sm:block">
        <button className="bg-[#F7FF0D] p-1 px-10 ">
          Most Popular
        </button>
      </div>
      <div className="w-full max-w-6xl mx-auto p-10 rounded-3xl bg-[#F3F3F3]">
        <div className=" rounded-lg  overflow-hidden">
          <div className="overflow-x-auto mt-[-1rem]">
            <table className="w-full">
              <thead className="border-b border-[#000000]">
                <tr>
                  <th className="bg-[#F3F3F3] text-[#09384D] p-2 text-left font-bold sm:text-3xl text-2xl border-r border-gray-200">
                    Plan Description
                  </th>
                  {plans.map((plan, i) => (
                    <th
                      key={i}
                      className={`p-0 relative cursor-pointer transition-all duration-200 }`}
                      onClick={() => handlePlanSelect(i)}
                    >
                      <div
                        className={`p-3 text-white 
                        } transition-all duration-200`}
                      >
                        <div className="p-2">
                          <button
                            className={`font-bold cursor-pointer text-lg px-4 py-2 rounded-xl w-32 text-center
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
                            className={`mt-1 mb-[-0.8rem] text-sm text-center text-white ml-[-0.6rem] mr-[-0.6rem] rounded-t-2xl 
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
                    <td className="p-4 text-left font-medium border-r border-gray-200 bg-[#F3F3F3]">
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

                <tr className="border-t-2 border-gray-200">
                  <td className="p-4 text-left font-bold text-lg border-r border-gray-200 bg-[#F3F3F3]">
                    Price / year
                  </td>
                  {plans.map((plan, i) => (
                    <td
                      key={i}
                      className={`p-4 text-center transition-all duration-200 ${
                        selectedPlan === i ? "bg-[#CFFFD9]" : "bg-[#F0F0F0]"
                      }`}
                    >
                      <span className="font-bold text-2xl text-gray-800">
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
    </>
  );
}
