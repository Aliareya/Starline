import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

function SimpleCart({item , mystyle=null , Iconstyle=null , is_about=null}) {
  const location = useLocation().pathname === '/about'
  return (
    <div className={`group px-10 lg:py-8 md:py-6 py-5  rounded-lg flex flex-col justify-center items-center shadow-md border border-[#003b3b28] bg-[#ffffff6f] ${mystyle}`}>
      {is_about ?
        <div className={`w-20 h-20 ${Iconstyle} flex justify-center items-center gradientcart group-hover:bg-[#056666b2] rounded-full border mainbordercolo`}>
          <Icon icon={item.icon} width="40" height="40"  style={{color: '#fff'}} />
        </div>:''
      }
      <h1 className={`text-xl pt-3 font-semibold   darkgreen`}>{item.title}</h1>
      <p className={`text-base font-medium pt-2 ${location ? 'text-start text-gray-600' :'text-center darkgreen'}  `}>
        {item.description}
      </p>
    </div>
  );
}

export default SimpleCart;
