import React from "react";
import { Icon } from "@iconify/react";

function Button({ label, click = null, color = null , icon=null , customClass=null , type="submit" }) {
  return (
    <button
    type={type}
      onClick={click}
      className={`flex gap-2 items-center justify-center
        px-5 py-1 text-sm rounded-md font-semibold text-white
        ${color === "o" ? "bg-[#f99e1f] hover:bg-[#d48413] " 
          : color === "g" ? "btn-gradient" 
          : "!text-black"}
       ${customClass}`}
    >
      {icon ? (<Icon icon={icon} width="24" height="24"  style={{color: '#fffs'}} />) : null}
      
      {label}
    </button>
  );
}

export default Button;
