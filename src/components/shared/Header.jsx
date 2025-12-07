import React, { useEffect, useState } from "react";
import logo from "../../assets/icon/logo.svg";
import MenuList from "./MenuList";
import Button from "../ui/botton/Button";
import MobailHeader from "./MobailHeader";

function Header() {
  const [ismobail, setMobail] = useState();
  

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 800) {
        setMobail(true);
      } else {
        setMobail(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
    {!ismobail  ? (
      <div className="w-full max-md:hidden md:flex h-20 flex justify-between items-center">
        <div className="w-1/4 h-20">
          <img src={logo} className="w-36 h-20 cursor-pointer" alt="" />
        </div>

        <div className="w-1/2 h-20 flex justify-end gap-10 items-center">
          <MenuList />
        </div>

        <div className="w-1/4 h-20 flex justify-end items-center">
          <Button label={"Login"} color={"b"} />
          <Button color={"o"} label={"Sing Up"} />
        </div>
      </div>

      ) : (<MobailHeader/>)}

      
    </>
  );
}

export default Header;
