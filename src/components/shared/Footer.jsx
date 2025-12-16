import React from "react";
import logo from "../../assets/icon/logo.svg";
import MenuList from "./MenuList";
import { useSiteConstant } from "../../context/SiteContext";
import { Icon } from "@iconify/react";

function Footer() {
  const { footerMenuP1, footerMenuP2 } = useSiteConstant();
  return (
    <div className="w-full h-auto bg-slate-100 lg:px-10 md:px-5 px-3 py-8 border-t mainbordercolor mt-7">
      <div className="w-full flex md:flex-row max-md:flex-row max-sm:flex-col justify-between  max-sm:gap-5">
        <div className="w-[40%] max-md:w-[30%] max-sm:w-full ">
          <div className="w-[35%] max-md:w-[50%] h-12">
            <img src={logo} className="w-full h-14" alt="" />
          </div>
          <p className="darkgreen font-normal text-sm pl-1 pt-4">
            Comfortable and Save bus travel across the <br className="hidden md:flex"></br>
            country. your journey your priority
          </p>
        </div>
        <div className="w-[20%] pt-1 max-sm:hidden">
          <h1 className="font-semibold text-[#053a3a]">Quick Links</h1>
          <div className="pt-2">
            <MenuList clasname={"pt-1"} value={footerMenuP1} />
          </div>
        </div>
        <div className="w-[20%] pt-1 block max-md:hidden">
          <h1 className="font-semibold text-[#053a3a]">Legal</h1>
          <div className="pt-2">
            <MenuList clasname={"pt-1"} value={footerMenuP2} />
          </div>
        </div>
        <div className="w-[20%] max-md:w-[30%] max-sm:w-full pt-1">
          <h1 className="font-semibold text-[#053a3a] ">Contact Us</h1>
          <div className="w-full pt-2 flex flex-col gap-3 ">
            <div className="flex gap-2">
              <Icon
                icon={"solar:phone-bold"}
                width="22"
                height="22"
                style={{ color: "#053A3A" }}
              />
              <p>+1 (555) 465 432</p>
            </div>
            <div className="flex gap-2">
              <Icon
                icon={"line-md:email-filled"}
                width="22"
                height="22"
                style={{ color: "#053A3A" }}
              />
              <p>ali.test@gamil.com</p>
            </div>
            <div className="flex gap-2">
              <Icon
                icon={"basil:location-outline"}
                width="22"
                height="22"
                style={{ color: "#053A3A" }}
              />
              <p>123 travil street, NY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-400 mt-6">
        <p className="darkgreen font-normal text-sm pl-1 pt-8 text-center ">
            2025 StarLine Bus Company. All rights reserved.
          </p>
      </div>
    </div>
  );
}

export default Footer;
