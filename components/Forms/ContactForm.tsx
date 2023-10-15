"use client";
import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
import SuccessPopup from "../Popup/SuccessPopup";
import Overlay from "../Overlay";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    phone: "",
    email: "",
    contents: "",
  });

  const handleFormData = (fieldName: string, value: string) => {
    setFormFields((prev) => {
      const updatedInfo: any = { ...prev };
      updatedInfo[fieldName] = value;
      return updatedInfo;
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");
    if (!formFields.name || !formFields.phone) {
      setErrorMessage("Please fill all the required fields.");
      return;
    }

    setIsProcessing(true);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact-us/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });
      setIsProcessing(false);
      setIsSubmitted(true);
      setErrorMessage("");
    } catch (err: any) {
      setErrorMessage("Something went wrong");
      setIsProcessing(false);
      setIsSubmitted(false);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="w-full lg:w-[500px] mt-[30px] flex flex-col gap-[20px] text-white "
    >
      <div className="flex flex-col gap-[5px] ">
        <label>Fullname</label>
        <input
          type="text"
          placeholder="Enter fullname"
          onChange={(e) => handleFormData("name", e.target.value)}
          className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none text-black "
        />
      </div>

      <div className="flex flex-col gap-[5px] ">
        <label>Contact Number</label>
        <input
          type="number"
          placeholder="Enter Contact Number"
          onChange={(e) => handleFormData("phone", e.target.value)}
          className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none text-black"
        />
      </div>

      <div className="flex flex-col gap-[5px] ">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => handleFormData("email", e.target.value)}
          className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none text-black"
        />
      </div>

      <div className="flex flex-col gap-[5px] ">
        <label>Message</label>
        <textarea
          placeholder="Write message"
          onChange={(e) => handleFormData("contents", e.target.value)}
          className="outline-none bg-slate-300 p-[8px] rounded-[4px] border-none text-black"
        />
      </div>

      {errorMessage && (
        <p className="text-[13px] text-red-400">
          <span className="text-red-500">*</span> {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className={`${
          isSubmitted
            ? "bg-green-600 text-white"
            : isProcessing
            ? "bg-PrimaryYellow"
            : "bg-primaryBlue"
        } w-max rounded-[4px] flex items-center gap-[5px] p-[10px] `}
      >
        <VscSend />{" "}
        {isProcessing
          ? "Please wait..."
          : isSubmitted
          ? "Submited successfully"
          : "send"}
      </button>

      {!isProcessing && !errorMessage && isSubmitted && (
        <SuccessPopup
          text="Sent successfully"
          handleCross={() => setIsSubmitted(false)}
        />
      )}
      {isSubmitted && <Overlay />}
    </form>
  );
};

export default ContactForm;
