import React from "react";

const BookPackage = () => {
    return (
        <div className="bg-darkGray min-h-[100vh] w-full flex flex-col items-center py-[50px]">
            <div className="mt-[50px]">
                <h1 className="bg-primaryYellow w-max font-montserrat font-bold text-xl p-[10px] rounded-[4px]">
                    Book Package
                </h1>
            </div>
            <div className="p-[20px] bg-white w-[80%] flex items-center gap-[20px] mt-[50px] shadow-lg rounded-[4px]">
                <div className="w-[40%] h-full flex flex-col items-center justify-center">
                    <p className="text-primaryBlue font-bold text-xl text-center underline underline-offset-8 decoration-primaryYellow">
                        Maternity package
                    </p>
                </div>
                <form className="border-2 border-l-primaryBlue p-[20px] w-full md:w-[500px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[5px]">
                        <label className="font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Name..."
                            className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label className="font-medium">Phone Number</label>
                        <input
                            type="number"
                            placeholder="Phone number..."
                            className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label className="font-medium">Date</label>
                        <input
                            type="date"
                            className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <label className="font-medium">Time</label>
                        <input
                            type="time"
                            className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
                        />
                    </div>
                    <div>
                        <button className="bg-primaryBlue px-[20px] py-[8px] text-white rounded-[10px] text-lg">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookPackage;