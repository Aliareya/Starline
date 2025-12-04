import React from 'react';
import { useSiteConstant } from '../../context/SiteContext';

function MenuList() {
   const {menu} = useSiteConstant();
  return (
    <>
    {menu.map((item , index)=>{
      return (
         <li key={`_${index}`} className='list-none font-semibold cursor-pointer '>{item}</li>
      )
    })}
    </>
  )
}

export default MenuList
