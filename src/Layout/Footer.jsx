import React from "react";
import youtube from "../assets/Youtube.webp";
import linkedin from "../assets/Linkedin.webp";
import facebook from "../assets/fb.webp";
import twitter from "../assets/Twitter.webp";
import mayaLogo from "../assets/Mayaa_Logo.svg";

function Footer() {
  return (
    <footer className="bg-[#F4FFFC] py-15 px-6 sm:px-10 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-300 pb-8 ">
        <div className="max-w-md text-center md:text-left ml-3 mr-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img src={mayaLogo} alt="Mayaa" className="h-10" />
          </div>
          <p className="mt-3 text-[#09384D] text-sm leading-relaxed font-urbanistRegular">
            Supporting parents with affordable, all-in-one
          </p>
          <p className="text-[#09384D] text-sm leading-relaxed font-urbanistRegular">
            healthcare plans to secure their child’s health and future.
          </p>
        </div>

        <div className="flex flex-col space-y-4 text-sm text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-6  border-b border-gray-300 ml-10 xl:ml-0">
            <a className="font-urbanistBold text-[#0D3C4C] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              About Us
            </a>
            <a className="font-urbanistBold text-[#0D3C4C] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              Contact
            </a>
            <a className="font-urbanistBold text-[#0D3C4C] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              Grievance Redressal
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:ml-10">
            <a className="text-[#09384D] font-urbanistRegular xl:text-lg cursor-pointer hover:text-[#1FA766]">
              Privacy Policy
            </a>
            <a className="text-[#09384D] font-urbanistRegular xl:text-lg cursor-pointer hover:text-[#1FA766]">
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600
                   text-center md:text-left "
      >
        <p className="mb-4 md:mb-0 xl:text-xl font-urbanistSemiBold text-[#767676]">2025 All rights reserved</p>

        <div className="flex space-x-5">
          {[
            {
              href: "https://www.facebook.com/",
              src: facebook,
              alt: "Facebook",
            },
            {
              href: "https://www.linkedin.com/",
              src: linkedin,
              alt: "LinkedIn",
            },
            { href: "https://www.twitter.com/", src: twitter, alt: "Twitter" },
            { href: "https://www.youtube.com/", src: youtube, alt: "YouTube" },
          ].map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-8 h-8 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
