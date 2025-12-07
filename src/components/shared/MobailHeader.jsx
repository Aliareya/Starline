import React, { useState } from "react";
import logo from "../../assets/icon/logo.svg";
import { Icon } from "@iconify/react";
import MenuList from "./MenuList";
import Button from "../ui/botton/Button";

function MobailHeader() {
  const [open, setOpen] = useState(false);

  const handleopenSubmenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full h-20 flex justify-between">
        <div className="w-1/5 max-sm:w-4/12 h-20">
          <img
            src={logo}
            className="w-32 h-20 cursor-pointer "
            alt=""
          />
        </div>

        <div className="w-3/4 h-20 pr-3 flex justify-end items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700"></div>
          <Icon onClick={handleopenSubmenu} icon={!open ?"mynaui:menu" : "line-md:close"} width="24" height="24" />
        </div>
      </div>

      {/* ALWAYS rendered so animation can run */}
      <div
        className={`${open ? "" : "hidden"} w-full px-2 absolute left-0 z-50 top-20 h-auto bg-slate-100 shadow-md pb-5 pt-1 rounded-b-md 
          ${open ? "menu-open " : "menu-close "}`}
      >
        <MenuList clasname="pl-3 py-1 !font-normal" />
        <div className="w-full h-20 pt-1 px-2">
          <Button label={"Login"} color={"b"} customClass="w-full bg-gray-200 mb-2 py-2" />
          <Button color={"o"} label={"Sing Up"} customClass="w-full py-2" />
        </div>
      </div>
    </>
  );
}

export default MobailHeader;
