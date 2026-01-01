import React from "react";
import { Icon } from "@iconify/react";

function Input({
  lable = null,
  placeholder = null,
  type = "text",
  register,
  icon = null,
  inputclass = null
}) {
  return (
    <>
      <label htmlFor="" className="text-sm darkgreen font-semibold">
        {lable}
      </label>
      <div className="flex border border-[#e0ebeb] p-1 justify-center items-center rounded-md">
        <Icon
          icon={icon}
          width="22"
          height="22"
          style={{ color: "#053A3A" }}
        />
        <input 
         {...register}
         type={type}
         className={`w-full py-1  outline-none bg-transparent pl-2 ${inputclass}`} 
         placeholder={placeholder}
         />
      </div>
    </>
  );
}

export default Input;
