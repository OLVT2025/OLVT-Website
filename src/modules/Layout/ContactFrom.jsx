"use client";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { MemoizedCustomInputFiled } from "@/SDK/InputFileds/inputFiled";
import { Database } from "@/utils/firebaseConfig";
import { push, ref } from "firebase/database";
import React, { useState } from "react";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      valid = false;
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        push(ref(Database, "contactUs"), formData);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // alert("Form submitted successfully!");
        setLoading(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false);
        alert("Failed to submit form. Please try again later.");
      }
    }
  };
  return (
    <div className="lg:mx-auto mx-4 w-11/12 lg:w-9/12 lg:mt-2 lg:mb-6 my-8 order border-accent-white shadow-lg rounded-2xl py-2">
      <div className="">
        <div className="flex justify-between p-10">
          <div className="w-full lg:w-1/2 ">
            <div className="text-base font-bold text-center md:text-left hidden lg:block ">
              Let's Collaborate, <br /> Connect with Us Today
            </div>
            <div className="text-base font-bold text-center md:text-left block lg:hidden mb-4">
              Let's Collaborate, Connect with Us Today
            </div>
            <form onSubmit={handleSubmit}>
              <MemoizedCustomInputFiled
                type="text"
                placeholder="Name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                isSubmitted={isSubmitted}
              />

              <MemoizedCustomInputFiled
                type="email"
                placeholder="Email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                isSubmitted={isSubmitted}
              />

              <MemoizedCustomInputFiled
                type="tel"
                placeholder="Mobile Number"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                isSubmitted={isSubmitted}
              />

              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Your secret message...."
                  className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <MemoizedPrimaryButton
                loading={loading}
                buttonText={`Submit`}
                style="w-full"
              />
              {isSubmitted && <div>We'll connect you shortly!</div>}
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/2 ">
            <img
              src="/images/Contact.svg"
              alt="Image"
              className="w-full max-w-md ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedContactFrom = React.memo(ContactFrom);
