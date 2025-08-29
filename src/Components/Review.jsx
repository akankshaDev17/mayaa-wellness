import React from "react";
import Ellipse1 from "../assets/Ellipse1.webp";
import Ellipse2 from "../assets/Ellipse2.webp";
import Ellipse3 from "../assets/Ellipse3.webp";
import Ellipse4 from "../assets/Ellipse4.webp";
import Ellipse5 from "../assets/Ellipse5.webp";
import Ellipse6 from "../assets/Ellipse6.webp";
import Ellipse7 from "../assets/Ellipse7.webp";

const reviews = [
{ img: Ellipse1, name: "Ramesh Chopra", location: "Parent, Pune", text: "We were skeptical. Then my daughter used the plan within 10 days. Doctor, therapy, checkup — all sorted." },
{ img: Ellipse2, name: "Sunita", location: "Parent, Chandigarh", text: "I was constantly worried about my son falling sick in a new city. With Mayaa, he had doctor access immediately." },
{ img: Ellipse3, name: "Priya", location: "Parent, Jaipur", text: "My daughter had her first anxiety episode during exams. I didn’t know who to call. The mental health support in the Mayaa plan stepped in when we couldn’t. Grateful." },
{ img: Ellipse4, name: "Ashok", location: "Parent, Delhi", text: "One call to Mayaa, and we had a full body check-up and more for my son in his hostel. No stress, no delays. This is real care." },
{ img: Ellipse5, name: "Deepak", location: "Parent, Ludhiana", text: "My son is not great at telling us when something’s wrong. Mayaa caught an early health issue during a routine check-up. Now I feel safer." },
{ img: Ellipse6, name: "Nirmala", location: "Parent, Indore", text: "I thought these plans were just marketing talk. But when my daughter had a bad throat and fever, Mayaa helped us get tests done the same day. We got the results and treatment without wasting time." },
{ img: Ellipse7, name: "Neena", location: "Parent, Lucknow", text: "The first month of college, my son called because he was sick. We used the Mayaa consult line — it worked like magic. No running around, no stress for him or me." },
{ img: Ellipse1, name: "Ram Mishra", location: "Parent, Pune", text: "We were skeptical. Then my daughter used the plan within 10 days. Doctor, therapy, checkup — all sorted." },
{ img: Ellipse2, name: "Samaira ", location: "Parent, Chandigarh", text: "I was constantly worried about my son falling sick in a new city. With Mayaa, he had doctor access immediately." },
{ img: Ellipse3, name: "Payal", location: "Parent, Jaipur", text: "My daughter had her first anxiety episode during exams. I didn’t know who to call. The mental health support in the Mayaa plan stepped in when we couldn’t. Grateful." },
{ img: Ellipse4, name: "Anant", location: "Parent, Delhi", text: "One call to Mayaa, and we had a full body check-up and more for my son in his hostel. No stress, no delays. This is real care." },
{ img: Ellipse5, name: "Dheeraj", location: "Parent, Ludhiana", text: "My son is not great at telling us when something’s wrong. Mayaa caught an early health issue during a routine check-up. Now I feel safer." },
{ img: Ellipse6, name: "Naina", location: "Parent, Indore", text: "I thought these plans were just marketing talk. But when my daughter had a bad throat and fever, Mayaa helped us get tests done the same day. We got the results and treatment without wasting time." },
{ img: Ellipse7, name: "Naira", location: "Parent, Lucknow", text: "The first month of college, my son called because he was sick. We used the Mayaa consult line — it worked like magic. No running around, no stress for him or me." },
];

const Review = () => {
// Base card styles (desktop kept as-is)
const cardClass =
"rounded-xl shadow-lg mx-2 sm:mx-3 md:mx-8 flex-shrink-0 flex flex-col justify-start items-start " +
"p-2.5 sm:p-3.5 md:p-8 overflow-hidden";

// Text style (kept)
const textClass = "text-[#828282] font-medium overflow-hidden";

return (
<div className="relative bg-gradient-to-r from-[#1EA887] to-[#3b9a5a] py-3 sm:py-5 md:py-12 overflow-hidden">
{/* Heading: preserve desktop; add mobile sizes from the first code */}
<h2 className=" text-white font-juanaMedium font-medium text-sm sm:text-lg /* mobile + sm sizing added */ md:text-[40px] md:leading-[45px] /* desktop unchanged */ text-center mb-4 sm:mb-7 md:mb-12 md:w-[577px] md:h-[90px] mx-auto " >
Read Honest Reviews of what{" "}
<br className="hidden sm:block" />
Customers Say About Us!
</h2>
  {/* Top row: add mobile card sizes from first code, keep desktop same */}
  <div className="relative flex overflow-x-hidden">
    <div className="flex animate-scroll-right-fast md:animate-scroll-right w-full">
      {[...reviews.slice(0, 8)].map((review, i) => (
        <div
          key={i}
          className={`${cardClass}
            w-[160px] h-[130px]            /* mobile from first code */
            sm:w-[200px] sm:h-[150px]      /* sm from first code */
            md:w-[335px] md:h-[299px]      /* desktop unchanged */
            bg-white text-black md:text-black
          `}
        >
          <div className="flex flex-row items-center w-full mb-1 sm:mb-1.5">
            <img
              src={review.img}
              alt={review.name}
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-16 md:h-16 rounded-full mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
            />
            <div className="flex flex-col items-start min-w-0">
              {/* Name: restore mobile size from first code (11px) while keeping desktop */}
              <span className="font-urbanistBold truncate w-full text-[11px] sm:text-xs md:text-xl text-[#09384D]">
                {review.name}
              </span>
              {/* Location: restore mobile sizes/colors from first code while keeping desktop */}
              <span className="text-[10px] sm:text-[11px] md:text-lg text-[#828282] font-urbanistRegular truncate w-full">
                {review.location}
              </span>
            </div>
          </div>
          {/* Text: re-add mobile clamping and sizes from first code */}
          <p className={`${textClass} text-[10px] font-urbanistRegular sm:text-[11px] md:text-lg mt-1 sm:mt-1.5 md:mt-2 line-clamp-4 md:line-clamp-none`}>
            {review.text}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Bottom row: same treatment */}
  <div className="relative flex overflow-x-hidden mt-5 sm:mt-7 md:mt-12">
    <div className="flex animate-scroll-left-fast md:animate-scroll-left w-full">
      {[...reviews.slice(8)].map((review, i) => (
        <div
          key={i}
          className={`${cardClass}
            w-[160px] h-[130px]
            sm:w-[200px] sm:h-[150px]
            md:w-[335px] md:h-[299px]
            bg-white text-black md:text-black
          `}
        >
          <div className="flex flex-row items-center w-full mb-1 sm:mb-1.5">
            <img
              src={review.img}
              alt={review.name}
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-16 md:h-16 rounded-full mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
            />
            <div className="flex flex-col items-start min-w-0">
              <span className="font-urbanistBold truncate w-full text-[11px] sm:text-xs md:text-xl text-[#09384D]">
                {review.name}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-lg text-[#828282] font-urbanistRegular truncate w-full">
                {review.location}
              </span>
            </div>
          </div>
          <p className={`${textClass} text-[10px] font-urbanistRegular sm:text-[11px] md:text-lg mt-1 sm:mt-1.5 md:mt-2 line-clamp-4 md:line-clamp-none`}>
            {review.text}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Gradient blur overlays: include both sizes from the first code */}
  <div
    className="pointer-events-none absolute left-0 bottom-0 w-full z-50 md:hidden"
    style={{
      height: "150px",
      background:
        "linear-gradient(to top, rgba(45,197,153,0.95) 2%, rgba(45,197,153,0.88) 40%, rgba(45,197,153,0.26) 90%, rgba(45,197,153,0.01) 100%)",
    }}
  />
  <div
    className="hidden md:block pointer-events-none absolute left-0 bottom-0 w-full z-50"
    style={{
      height: "360px",
      background:
        "linear-gradient(to top, rgba(45,197,153,0.95) 2%, rgba(45,197,153,0.88) 40%, rgba(45,197,153,0.26) 90%, rgba(45,197,153,0.01) 100%)",
    }}
  />
</div>
);
};

export default Review;