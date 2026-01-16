import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function BookingBanner() {
   const navigate = useNavigate()
  return (
    <div className="w-full px-12 max-sm:px-3 max-sm:gap-2 flex items-center justify-center py-20 max-sm:py-10 max-sm:pt-16">
      <div
        onClick={() => navigate("/")}
        className="px-5 py-2 absolute left-7 max-sm:-left-2 cursor-pointer top-24 flex items-center gap-2"
      >
        <Icon icon="famicons:arrow-back" width="20" height="20" />
        <span className="text-sm">Back</span>
      </div>

      <div className="w-auto flex flex-col justify-center items-center ">
        <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[#056666] flex justify-center items-center rounded-full border-[#dae7e7] border-4">
          1
        </div>
        <p className="max-sm:text-center text-sm max-sm:text-xs  text-[#056666] font-medium pt-1">
          Select Seats
        </p>
      </div>
      <div className="lg:w-32 max-sm:w-28 md:w-20 max-md:w-20  mb-5 max-sm:mb-8 h-1 bg-slate-400 rounded-xl"></div>
      <div className="w-20 flex flex-col items-center ">
        <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[#056666] flex justify-center items-center rounded-full border-[#dae7e7] border-4">
          1
        </div>
        <p className="text-sm max-sm:text-xs max-sm:text-center md:text-center text-gray-400 font-medium pt-1">
          T-Details
        </p>
      </div>
      <div className="lg:w-32 max-sm:w-28 md:w-20 max-md:w-20  mb-5 max-sm:mb-8 h-1 bg-slate-400 rounded-xl"></div>
      <div className="w-20 flex flex-col items-center ">
        <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[#056666] flex justify-center items-center rounded-full border-[#dae7e7] border-4">
          1
        </div>
        <p className="text-sm max-sm:text-xs max-sm:text-center md:text-center text-gray-400  font-medium pt-1">
          Select Seats
        </p>
      </div>
      <div className="lg:w-32 max-sm:w-28 md:w-20 max-md:w-20  mb-5 max-sm:mb-8 h-1 bg-slate-400 rounded-xl"></div>
      <div className="w-20 flex flex-col items-center ">
        <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-[#056666] flex justify-center items-center rounded-full border-[#dae7e7] border-4">
          1
        </div>
        <p className="text-sm max-sm:text-xs max-sm:text-center md:text-center text-gray-400  font-medium pt-1">
          Select Seats
        </p>
      </div>
    </div>
  );
}

export default BookingBanner;
