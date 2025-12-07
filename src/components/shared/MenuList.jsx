import React from 'react';
import { useSiteConstant } from '../../context/SiteContext';

function MenuList({clasname =null}) {
   const {menu} = useSiteConstant();
  return (
    <>
    {menu.map((item , index)=>{
      return (
         <li key={`_${index}`} className={`list-none font-semibold cursor-pointer ${clasname}`}>{item}</li>
      )
    })}
    </>
  )
}

export default MenuList
