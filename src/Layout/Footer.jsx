import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import mayaLogo from "../assets/Mayaa_Logo.svg";

function Footer() {
  return (
    <footer className="bg-[#F4FFFC] py-15 px-6 sm:px-10 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-300 pb-8 ">
        <div className="max-w-md text-center md:text-left ml-3 mr-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <img src={mayaLogo} alt="Mayaa" className="h-10" />
          </div>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Supporting parents with affordable, all-in-one
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            healthcare plans to secure their child’s health and future.
          </p>
        </div>

        <div className="flex flex-col space-y-4 text-sm text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start gap-6  border-b border-gray-300 ml-10 xl:ml-0">
            <a className="font-semibold text-[#002B36] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              About Us
            </a>
            <a className="font-semibold text-[#002B36] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              Contact
            </a>
            <a className="font-semibold text-[#002B36] xl:text-xl cursor-pointer hover:text-[#1FA766]">
              Grievance Redressal
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:ml-10">
            <a className="text-[#002B36] xl:text-lg cursor-pointer hover:text-[#1FA766]">
              Privacy Policy
            </a>
            <a className="text-[#002B36] xl:text-lg cursor-pointer hover:text-[#1FA766]">
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600
                   text-center md:text-left "
      >
        <p className="mb-4 md:mb-0 xl:text-xl ml-">2025 All rights reserved</p>
        <div className="flex space-x-5">
          <a href="https://www.facebook.com/" className="text-xl">
            <FaFacebook className="cursor-pointer hover:text-[#1FA766]" />
          </a>
          <a href="https://www.linkedin.com/" className="text-xl">
            <FaLinkedin className="cursor-pointer hover:text-[#1FA766]" />
          </a>
          <a href="https://www.twitter.com/" className="text-xl">
            <FaTwitter className="cursor-pointer hover:text-[#1FA766]" />
          </a>
          <a href="https://www.youtube.com/" className="text-xl">
            <FaYoutube className="cursor-pointer hover:text-[#1FA766]" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
