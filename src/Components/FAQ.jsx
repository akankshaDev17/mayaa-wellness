import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this plan valid outside my child's city?",
    answer:
      "Yes, absolutely! Your child's health and safety matter no matter where they are — and this plan is designed to support them across India. Whether your child is studying in a different city, visiting relatives, or traveling for internships or competitions, they can access all plan benefits nationwide.",
  },
  {
    question: "Can I pay for the plan in parts?",
    answer:
      "Yes, flexible payment options are available so you can pay in parts without hassle.",
  },
  {
    question: "Is health insurance included?",
    answer:
      "Our plan complements your existing health insurance by covering wellness and extra benefits.",
  },
  {
    question: "What if my child is already covered in my health insurance plan?",
    answer:
      "No worries! Our plan works alongside your health insurance to provide extra wellness benefits.",
  },
  {
    question: "How do I contact you?",
    answer:
      "You can contact us via phone, email, or live chat through our official website.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="font-gilroyBold text-center text-3xl sm:text-4xl font-bold text-[#35332F] mb-12">
        Frequently Ask Questions
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 transition-all"
          >
            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {openIndex === index ? (
                <Minus className="text-[#52BD95] mt-1 flex-shrink-0" size={22} />
              ) : (
                <Plus className="text-[#1B1139] mt-1 flex-shrink-0" size={22} />
              )}
              <h3 className="inter-Semibold text-lg text-[#1B1139]">
                {faq.question}
              </h3>
            </div>

            {openIndex === index && (
              <div className="flex items-start gap-3 mt-3">
                <div className="w-[22px] flex-shrink-0"></div>
                <p className="text-[#363049] leading-relaxed inter-Regular">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
