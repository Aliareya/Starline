import React from "react";
import { Icon } from "@iconify/react";

function Card({icon , text}) {
  return (
    <div className="w-full h-auto p-5 flex border-t-4 mainbordercolor border-t-[#056666b2] items-center gap-3 py-6 bg-white shadow-md rounded-md border ">
      <div className="w-10 h-10 rounded-full bg-[#aac7c7b2] flex justify-center items-center ">
        <Icon
          icon={icon}
          width="24"
          height="24"
          style={{ color: "#056666" }}
        />
      </div>
      <p className="text-base font-normal hover:font-semibold hover:text-green-950 cursor-pointer">
        {text}
      </p>
    </div>
  );
}

export default Card;
