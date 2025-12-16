import React from "react";
import { Icon } from "@iconify/react";
import { map } from "motion/react-client";

function CommendCard({commned}) {
  const logo = commned?.name?.split(" ").map((word)=>word[0]).join("").toUpperCase();
  const stars = Array.from({length : commned?.stars} , (_)=>0);

  return (
    <div className="w-full border mainbordercolor shadow-lg px-5 py-5 rounded-md">
      <div className="w-full flex items-center gap-1">
        <div className="w-12 h-12 rounded-full bg-[#05666633] flex justify-center items-center">
          <span className="text-lg font-semibold darkgreen">{logo}</span>
        </div>
        <div className="">
          <h1 className="text-base font-semibold text-[#446767] pl-1">
            {commned.name}
          </h1>
          <div className="flex items-center gap-0">
            {stars?.map((_, index) => {
              return (
                <Icon
                  key={index}
                  icon="mynaui:star-solid"
                  width="18"
                  height="18"
                  style={{ color: " #f99e1f" }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-base pt-4 pl-1">
        {commned?.commnet}
      </p>
    </div>
  );
}

export default CommendCard;
