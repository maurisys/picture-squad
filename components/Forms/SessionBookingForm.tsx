"use client";
import React, { useState } from "react";
import SuccessPopup from "../Popup/SuccessPopup";
import Overlay from "../Overlay";

const SessionBookingForm = ({ sessionTitle, type }: any) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    status: 1
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
    if (!formFields.name || !formFields.address || !formFields.phone) {
      setErrorMessage("Please fill all the required fields.");
      return;
    }

    const updatedField: any = {
      ...formFields,
      booking_title: sessionTitle || "...",
      type: type || "...",
    };

    setIsProcessing(true);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedField),
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
      className="border-2 border-l-primaryBlue p-[20px] w-full md:w-[500px] flex flex-col gap-[20px]"
    >
      <div className="flex flex-col gap-[5px]">
        <label className="font-medium">Name</label>
        <input
          type="text"
          value={formFields.name}
          placeholder="Name..."
          onChange={(e) => handleFormData("name", e.target.value)}
          className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label className="font-medium">Phone Number</label>
        <input
          type="number"
          placeholder="Phone number..."
          value={formFields.phone}
          onChange={(e) => handleFormData("phone", e.target.value)}
          className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label className="font-medium">Address</label>
        <input
          type="text"
          value={formFields.address}
          placeholder="Address..."
          onChange={(e) => handleFormData("address", e.target.value)}
          className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label className="font-medium">Date</label>
        <input
          type="date"
          onChange={(e) => handleFormData("date", e.target.value)}
          className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <label className="font-medium">Time</label>
        <input
          type="time"
          onChange={(e) => handleFormData("time", e.target.value)}
          className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
        />
      </div>
      {errorMessage && (
        <p className="text-[13px] text-red-400">
          <span className="text-red-500">*</span> {errorMessage}
        </p>
      )}
      <div>
        <button
          type="submit"
          disabled={isProcessing}
          className={`${
            isSubmitted
              ? "bg-green-600 text-white"
              : isProcessing
              ? "bg-PrimaryYellow"
              : "bg-primaryBlue"
          } px-[20px] py-[8px] rounded-[10px] text-lg`}
        >
          {isProcessing
            ? "Please wait..."
            : isSubmitted
            ? "Submited successfully"
            : "send"}
        </button>
      </div>

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

export default SessionBookingForm;
