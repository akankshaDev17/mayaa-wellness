import React, { useState, useEffect } from "react";
import { FaUserAlt, FaPhoneAlt, FaTimes } from "react-icons/fa";
import HeroImg from "../assets/Hero.webp";
import HeroFrame from "../assets/Collage.webp";

// Toast component for success message
const Toast = ({ message, onClose }) => (
  <div className="fixed top-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#1BBE83] text-white font-semibold rounded-lg shadow-lg z-50 flex items-center">
    {message}
    <button
      type="button"
      className="absolute -top-[-2px] -right-[-4px] w-7 h-7 flex items-center justify-center bg-[#1BBE83] rounded-full hover:bg-[#169b67] z-50"
      onClick={onClose}
      aria-label="Close form"
    >
      <FaTimes className="text-white" size={14} />
    </button>
  </div>
);

const Hero = () => {
  const [showForm, setShowForm] = useState(true);
  const [toast, setToast] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [tncError, setTncError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const validateName = (value) => {
    if (!value) return "Please enter your name.";
    return "";
  };

  const validatePhone = (value) => {
    if (!value) return "Please enter your phone number.";
    if (!/^[0-9]{10}$/.test(value)) return "Phone number must be 10 digits.";
    return "";
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setName(value);
    if (submitted && value) setNameError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
    if ((submitted || phoneError) && value.length === 10) setPhoneError("");
    else if ((submitted || phoneError) && value) setPhoneError("");
  };

  const handleTncChange = () => {
    setAgreed(!agreed);
    if (submitted && !agreed) setTncError("");
  };

  const handleBlur = () => {
    if (submitted) {
      setNameError(validateName(name));
      setPhoneError(validatePhone(phone));
      setTncError(agreed ? "" : "Kindly agree to the terms and conditions.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const nameErrorMsg = validateName(name);
    const phoneErrorMsg = validatePhone(phone);
    const tncErrorMsg = agreed ? "" : "Kindly agree to terms and condition.";

    setNameError(nameErrorMsg);
    setPhoneError(phoneErrorMsg);
    setTncError(tncErrorMsg);

    if (!nameErrorMsg && !phoneErrorMsg && !tncErrorMsg) {
      setShowForm(false);
      setToast("Form submitted successfully!");
      setName("");
      setPhone("");
      setAgreed(false);
      setSubmitted(false);

      setTimeout(() => {
        setToast("");
      }, 2500);
    }
  };

  const handleClose = () => {
    setToast("");
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section className="relative bg-[#E8F8F5] overflow-hidden">
      {toast && <Toast message={toast} onClose={handleClose} />}
      <div
        className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0"
        style={{
          background: "linear-gradient(135deg, #1BBE83, #24D490)",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 md:py-10 px-6">
        {/* Left side content */}
        <div className="md:w-1/2 z-10 flex flex-col justify-start text-center md:text-left  mt-0 px-4 md:px-0">
          <h1 className="text-5xl  mb-4 font-gilroyBold">
            <span className="text-[#1BBE83]">Your Child Is Leaving for College.</span> We’ll Take Care of
            Their Health When You Can’t.
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-5 font-urbanistRegular">
            24/7 doctor consults, mental health support, annual checkups, and <br></br> accident insurance — all in one
            affordable plan.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <img src={HeroFrame} alt="Trusted users" className="w-44 md:w-28 h-auto rounded-full" />
            <p className="text-gray-800 font-urbanistRegular">
              Trusted by <span className="font-bold">10,000 +</span> parents
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => console.log("protect my child")}
              className="bg-[#1BBE83] hover:bg-[#16a76f] text-white font-juanaBold px-8 py-3 rounded-full transition duration-200 shadow-md cursor-pointer"
            >
              Protect My Child
            </button>
          </div>
        </div>

        {/* Right side image and form */}
        <div
          className="md:w-1/2 flex justify-center relative"
          style={{ height: 550, width: 400 }}
        >
          <img src={HeroImg} alt="Student" className="h-full w-full object-cover rounded-xl" />
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="absolute top-16 left-1/2 translate-x-[-50%] w-[90vw] max-w-[370px] bg-white rounded-2xl p-7 flex flex-col space-y-6 shadow-xl z-20"
              style={{ background: "rgba(255,255,255,0.97)", borderRadius: 32, minHeight: 360 , top: '5.5rem'}}
            >
              <button
                type="button"
                className="absolute -top-[-5px] -right-[-5px] w-7 h-7 flex items-center justify-center bg-[#1BBE83] rounded-full hover:bg-[#169b67] z-50 cursor-pointer"
                onClick={handleCloseForm}
                aria-label="Close form"
              >
                <FaTimes className="text-white" size={14} />
              </button>

              <h2 className="text-2xl font-bold text-[#1BBE83] mb-2">Looking for the right plan?</h2>
              <p className="text-gray-900 mb-3">Our experts are here to guide you</p>

              <div className="relative flex flex-col">
                <span className="absolute left-4 top-3 text-gray-400">
                  <FaUserAlt size={19} />
                </span>
                <input
                  type="text"
                  className="pl-11 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BBE83] focus:border-[#1BBE83]"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {nameError && <span className="text-red-600 text-sm mt-0">{nameError}</span>}
              </div>

              <div className="relative flex flex-col">
                <span className="absolute left-4 top-3 text-gray-400">
                  <FaPhoneAlt size={19} />
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="pl-11 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1BBE83] focus:border-[#1BBE83]"
                  placeholder="Enter Your Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {phoneError && <span className="text-red-600 text-sm mt-0">{phoneError}</span>}
              </div>

              <div className="flex items-center">
                <input
                  id="tnc"
                  type="checkbox"
                  checked={agreed}
                  onChange={handleTncChange}
                  className="form-checkbox h-5 w-5 cursor-pointer border-gray-300 mt-[-2px] "
                />
                <label htmlFor="tnc" className="ml-2 text-gray-900 select-none mt-[-9px] ">
                  I agree to the{" "}
                  <span className="text-[#1BBE83] font-semibold cursor-pointer underline">
                    Terms and Conditions.
                  </span>
                </label>
              </div>
              
              {tncError && <div className="text-red-600 text-sm mt-[-22px]">{tncError}</div>}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#1BBE83] py-3 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-[#16a76f] cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;