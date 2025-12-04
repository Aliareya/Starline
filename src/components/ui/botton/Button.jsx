import React from "react";

function Button({ label, click = null, color = null }) {
  return (
    <button
      onClick={click}
      className={`
        px-5 py-1.5 text-[17px] rounded-md font-semibold text-white
        ${color === "o" ? "bg-[#f99e1f] hover:bg-[#d48413] " 
          : color === "g" ? "btn-gradient" 
          : "!text-black"}
      `}
    >
      {label}
    </button>
  );
}

export default Button;
