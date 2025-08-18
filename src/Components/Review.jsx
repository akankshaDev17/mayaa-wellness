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
];

const CARD_WIDTH = 420;
const CARD_HEIGHT = 270;

const Review = () => {
  const cardClass =
    "bg-white p-8 rounded-xl shadow-lg mx-8 flex-shrink-0 flex flex-col justify-start items-start";
  const cardStyle = { width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` };

  return (
    <div className="relative bg-gradient-to-r from-green-400 to-teal-500 py-4 overflow-hidden">
      <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12 font-juanaMedium">
        Read Honest Reviews of what <br className="hidden sm:block" /> Customers Say About Us!
      </h2>

      {/* Top row */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-scroll-right" style={{ width: "100%" }}>
          {[...reviews.slice(0, 4), ...reviews.slice(0, 4)].map((review, i) => (
            <div key={i} className={cardClass} style={cardStyle}>
              <div className="flex flex-row items-center w-full mb-2">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex flex-col items-start">
                  <span className="font-urbanistBold text-xl">{review.name}</span>
                  <span className="text-lg text-gray-500 font-urbanistMedium">{review.location}</span>
                </div>
              </div>
              <p className="text-gray-500 text-lg mt-2 text-left w-full font-urbanistRegular">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative flex overflow-x-hidden mt-12">
        <div className="flex animate-scroll-left" style={{ width: "100%" }}>
          {[...reviews.slice(4), ...reviews.slice(4)].map((review, i) => (
            <div key={i} className={cardClass} style={cardStyle}>
              <div className="flex flex-row items-center w-full mb-2">
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex flex-col items-start">
                  <span className="font-urbanistBold text-xl">{review.name}</span>
                  <span className="text-lg text-gray-500 font-urbanistMedium">{review.location}</span>
                </div>
              </div>
              <p className="text-gray-700 text-lg mt-2 text-left w-full font-urbanistRegular">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Greenish blur overlay at the very bottom, covering full height of bottom cards */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-full z-50"
        style={{
          height: "360px", // Should match or slightly exceed CARD_HEIGHT + mt-14 (adjust as needed!)
          background:
            "linear-gradient(to top, rgba(45,197,153,0.95) 2%, rgba(45,197,153,0.88) 40%, rgba(45,197,153,0.26) 90%, rgba(45,197,153,0.01) 100%)"
        }}
      />
    </div>
  );
};

export default Review;