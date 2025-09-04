// Install dependencies first:
// npm install react-icons react-toastify

import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isValidName(name) {
  // Only letters and spaces, len >= 2
  return /^[A-Za-z\s]{2,}$/.test(name);
}

function isValidPhone(phone) {
  // Accepts only 10-digits (common for India); adjust for other regions
  return /^[6-9][0-9]{9}$/.test(phone);
}

export default function Form() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({ name: false, phone: false });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      // Block numbers immediately
      const filteredValue = value.replace(/[0-9]/g, "");
      setForm((prev) => ({ ...prev, name: filteredValue }));
      setErrors((prev) => ({
        ...prev,
        name: filteredValue && !isValidName(filteredValue) ? "Enter a valid name" : "",
      }));
    } else if (name === "phone") {
      // Only allow digits, max 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      setErrors((prev) => ({
        ...prev,
        phone: digitsOnly.length !== 10 ? "Enter a valid phone number" : "",
      }));
    }
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    // Show error if empty on blur
    if (!form[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: e.target.name === "name"
          ? "Enter a valid name"
          : "Enter a valid phone number",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true }); // Mark both as touched
    const nameValid = isValidName(form.name);
    const phoneValid = form.phone.length === 10 && isValidPhone(form.phone);

    setErrors({
      name: !nameValid ? "Enter a valid name" : "",
      phone: !phoneValid ? "Enter a valid phone number" : "",
    });

    if (!nameValid || !phoneValid) return;

    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      draggable: false,
      pauseOnHover: false,
      toastStyle: {
        fontSize: 22,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "22px",
      },
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-[30px] sm:rounded-[47px] shadow-lg w-[320px] sm:w-[655px] h-[500px] sm:h-[739px] flex flex-col items-center py-4 sm:py-6 px-2 mx-auto relative">
      <div className="mt-8 sm:mt-12 mb-4 sm:mb-6 flex justify-center">
        <div className="flex items-center justify-center w-[80px] sm:w-[127px] h-[80px] sm:h-[127px] rounded-full bg-[#1EA887] mb-4 sm:mb-6">
          <MdCall size={55} color="#fff" />
        </div>
      </div>
      <h1
        className="mb-2 sm:mb-3 text-[24px] sm:text-[41px] text-[#000000] font-juanaMedium"
        style={{ fontWeight: "400" }}
      >
        Request call back
      </h1>
      <div
        className="mb-4 sm:mb-8 text-[14px] sm:text-[20px] text-[#09384D] font-urbanistRegular text-center px-3 sm:px-4"
        style={{ fontWeight: 400 }}
      >
        Let our experts guide you to the perfect plan.
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-3 sm:gap-4"
        autoComplete="off"
      >
        <div className="w-[280px] sm:w-[559px]">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            disabled={submitted}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full h-[50px] sm:h-[69px] rounded-[11px] bg-[#EEEEEE] px-4 sm:px-6 text-[14px] sm:text-[21px] font-urbanistRegular outline-none focus:ring-2 focus:ring-[#000000] transition-all"
          />
          {errors.name && touched.name && (
            <div className="mt-1 text-red-600 text-[12px] sm:text-[16px] font-urbanistRegular">{errors.name}</div>
          )}
        </div>
        <div className="w-[280px] sm:w-[559px]">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            disabled={submitted}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={10}
            inputMode="numeric"
            className="w-full h-[50px] sm:h-[69px] rounded-[11px] bg-[#EEEEEE] px-4 sm:px-6 text-[14px] sm:text-[21px] font-urbanistRegular outline-none focus:ring-2 focus:ring-[#000000] transition-all"
          />
          {errors.phone && touched.phone && (
            <div className="mt-1 text-red-600 text-[12px] sm:text-[16px] font-urbanistRegular">{errors.phone}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={submitted}
          className={`w-[280px] sm:w-[559px] h-[42px] sm:h-[76px] rounded-[15px] bg-[#1EA887] mt-4 transition-all cursor-pointer ${
            submitted ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02] hover:bg-[#169d79]"
          }`}
        >
          <span className="text-white text-[16px] sm:text-[25px] font-urbanistBold font-bold">
            Submit
          </span>
        </button>
      </form>
      <ToastContainer
        position="top-center"
        draggable={false}
        closeOnClick
        hideProgressBar
        newestOnTop
        limit={1}
      />
    </div>
  );
}
