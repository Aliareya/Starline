import React from "react";
import { Icon } from "@iconify/react";
import CommendCard from "../../../components/card/CommendCard";
import { useSiteConstant } from "../../../context/SiteContext";

function UserCommend() {
   const {userCommend} = useSiteConstant();
  return (
    <div className="w-full h-auto lg:px-11 md:px-5 px-3  pt-5 pb-10">
      <h1 className="lg:text-4xl md:text-3xl text-3xl darkgreen max-sm:font-bold font-semibold text-center font-[sans-serif]">
        What Our Travelers Says
      </h1>
      <p className="text-base font-medium pt-3 text-center darkgreen">
        Real Experiences from real Travelers
      </p>
      <div className="w-full flex justify-between lg:flex-row flex-col gap-6 md:pt-10 max-md:pt-8 max-sm:pt-5">
         {userCommend.map((commned , index)=>{
            return(
              <CommendCard commned={commned} key={index}/>
            )
         })}
      </div>
    </div>
  );
}

export default UserCommend;
