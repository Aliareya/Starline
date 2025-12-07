import React from 'react';
import { useSiteConstant } from '../../context/SiteContext';

function MenuList({clasname =null}) {
   const {menu} = useSiteConstant();
  return (
    <>
    {menu.map((item , index)=>{
      return (
         <li key={`_${index}`} className={`hover:font-semibold hover:text-[#053a3a] text-base list-none font-normal cursor-pointer ${clasname}`}>{item}</li>
      )
    })}
    </>
  )
}

export default MenuList
