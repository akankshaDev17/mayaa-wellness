import React, { useState } from "react";
import { FaUserAlt, FaPhoneAlt, FaRegEnvelope, FaTimes } from "react-icons/fa";

const brand = "#0D3B45";

// Toast with brand bg + close icon
const Toast = ({ message, onClose }) => (
  <div
    className="fixed left-1/2 top-4 -translate-x-1/2 z-50 flex items-center gap-2 rounded-md px-2 py-1 text-[9px] font-semibold text-white shadow-lg 
               sm:px-3 sm:py-2 sm:text-xs"
    style={{ backgroundColor: brand }}
  >
    <span>{message}</span>
    <button
      type="button"
      className="rounded p-0.5 hover:bg-white/15 transition"
      onClick={onClose}
      aria-label="Close toast"
    >
      <FaTimes size={10} className="text-white sm:w-3 sm:h-3" />
    </button>
  </div>
);

const Form = ({ topMargin = "mt-20", maxWidthClass = "max-w-6xl" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [tncError, setTncError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [toast, setToast] = useState("");

  // validations
  const validateName = (value) => (!value ? "Please enter your name." : "");
  const validatePhone = (value) => {
    if (!value) return "Please enter your number.";
    if (!/^[0-9]{10}$/.test(value)) return "Phone number must be 10 digits.";
    return "";
  };
  const validateEmail = (value) => {
    if (!value) return "Please enter your email.";
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  // handlers
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setName(value);
    if (submitted) setNameError(validateName(value));
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
    if (submitted) setPhoneError(validatePhone(value));
  };
  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    if (submitted) setEmailError(validateEmail(value));
  };
  const handleTncChange = () => {
    const next = !agreed;
    setAgreed(next);
    if (submitted)
      setTncError(next ? "" : "Kindly agree to the terms and conditions.");
  };

  const handleBlur = () => {
    if (!submitted) return;
    setNameError(validateName(name));
    setPhoneError(validatePhone(phone));
    setEmailError(validateEmail(email));
    setTncError(agreed ? "" : "Kindly agree to the terms and conditions.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);
    const tncErr = agreed ? "" : "Kindly agree to terms and condition.";

    setNameError(nameErr);
    setPhoneError(phoneErr);
    setEmailError(emailErr);
    setTncError(tncErr);

    if (!nameErr && !phoneErr && !emailErr && !tncErr) {
      setToast("Form submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setAgreed(false);
      setSubmitted(false);
      setTimeout(() => setToast(""), 2000);
    }
  };

  // Help line under inputs
  const HelpLine = ({ error }) => (
    <div className="mt-0 h-[10px] leading-[10px] sm:mt-1 sm:h-5">
      {error ? (
        <span className="text-[9px] leading-[10px] text-red-600 sm:text-xs">
          {error}
        </span>
      ) : (
        <span className="invisible text-[9px] leading-[10px] sm:text-xs">.</span>
      )}
    </div>
  );

  return (
    <section className="w-full mt-6 sm:mt-20">
      {toast && <Toast message={toast} onClose={() => setToast("")} />}

      {/* Card */}
      <div
        className={`mx-auto w-[96%] ${maxWidthClass} rounded-2xl border bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]`}
        style={{ borderColor: brand }}
      >
        {/* Heading */}
        <div className="px-4 pt-3 text-center">
          <h2
            className="text-sm sm:text-2xl md:text-[28px] leading-tight font-bold"
            style={{ color: brand }}
          >
            Looking for the right plan?
          </h2>
          <p className="text-[10px] sm:text-base mt-1 mb-1 text-gray-700">
            Our experts are here to guide you
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 pb-3 pt-1" noValidate>
          {/* Inputs wrapper */}
          <div
            className="mt-3 flex flex-col gap-3 overflow-x-hidden pb-1
                       sm:mt-5 sm:flex-row sm:items-end sm:gap-6 lg:gap-10"
            onBlur={handleBlur}
          >
            {/* Name */}
            <div className="flex-1 min-w-0">
              <label
                className="mb-1 block text-[9px] sm:text-sm font-semibold"
                style={{ color: brand }}
              >
                Enter Your Name
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2 sm:left-3"
                  style={{ color: brand }}
                >
                  <FaUserAlt className="h-[12px] w-[12px] sm:h-4 sm:w-4" />
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full overflow-hidden rounded-lg border bg-transparent pl-5 pr-2 py-1 text-[9px] tracking-tight text-gray-800 focus:outline-none 
                             sm:pl-10 sm:pr-3 sm:py-2 sm:text-sm md:text-base"
                  style={{ borderColor: brand }}
                  autoComplete="off"
                />
              </div>
              <HelpLine error={nameError} />
            </div>

            {/* Phone */}
            <div className="flex-1 min-w-0">
              <label
                className="mb-1 block text-[9px] sm:text-sm font-semibold"
                style={{ color: brand }}
              >
                Enter Your Phone Number
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2 sm:left-3"
                  style={{ color: brand }}
                >
                  <FaPhoneAlt className="h-[12px] w-[12px] sm:h-4 sm:w-4" />
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full overflow-hidden rounded-lg border bg-transparent pl-5 pr-2 py-1 text-[9px] tracking-tight text-gray-800 focus:outline-none 
                             sm:pl-10 sm:pr-3 sm:py-2 sm:text-sm md:text-base"
                  style={{ borderColor: brand }}
                  autoComplete="off"
                />
              </div>
              <HelpLine error={phoneError} />
            </div>

            {/* Email */}
            <div className="flex-1 min-w-0">
              <label
                className="mb-1 block text-[9px] sm:text-sm font-semibold"
                style={{ color: brand }}
              >
                Enter Your Email
              </label>
              <div className="relative">
                <span
                  className="pointer-events-none absolute left-1 top-1/2 -translate-y-1/2 sm:left-3"
                  style={{ color: brand }}
                >
                  <FaRegEnvelope className="h-[12px] w-[12px] sm:h-4 sm:w-4" />
                </span>
                <input
                  type="email"
                  placeholder="abc@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full overflow-hidden rounded-lg border bg-transparent pl-5 pr-2 py-1 text-[9px] tracking-tight text-gray-800 focus:outline-none 
                             sm:pl-10 sm:pr-3 sm:py-2 sm:text-sm md:text-base"
                  style={{ borderColor: brand }}
                  autoComplete="email"
                />
              </div>
              <HelpLine error={emailError} />
            </div>
          </div>

          {/* T&C + Submit */}
          <div className="mt-2 sm:mt-3 flex flex-col items-center">
            <div className="flex items-center">
              <input
                id="tnc"
                type="checkbox"
                checked={agreed}
                onChange={handleTncChange}
                className="h-3 w-3 cursor-pointer border-gray-300 sm:h-4 sm:w-4"
              />
              <label
                htmlFor="tnc"
                className="ml-2 select-none text-[9px] leading-none sm:text-base sm:leading-normal"
                style={{ color: brand }}
              >
                I agree to the{" "}
                <span className="font-semibold underline cursor-pointer">
                  Terms and Conditions.
                </span>
              </label>
            </div>

            <div className="h-[10px] leading-[10px] -mt-0.5 mb-2 sm:h-5 sm:leading-normal sm:mt-1 sm:mb-0">
              {tncError ? (
                <span className="text-[9px] leading-none text-red-600 sm:text-[11px]">
                  {tncError}
                </span>
              ) : (
                <span className="invisible text-[9px] leading-none sm:text-[11px]">
                  .
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#0D3B45] px-4 py-1 text-[10px] font-semibold text-white shadow-md transition hover:bg-[#0b313a] 
                         sm:mt-2 sm:w-auto sm:px-10 sm:py-2.5 sm:text-sm md:px-12 md:text-base cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Placeholder color */}
      <style>{`
        input::placeholder { color: ${brand}; opacity: 0.7; }
      `}</style>
    </section>
  );
};

export default Form;