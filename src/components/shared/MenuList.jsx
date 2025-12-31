import React from 'react';
import { useSiteConstant } from '../../context/SiteContext';
import { useNavigate } from 'react-router-dom';

function MenuList({clasname =null , value = null}) {
  const navigate = useNavigate();
  const {menu} = useSiteConstant();
  const output = value !== null ? value : menu;

  function clickpath(item){
    if(item == "Home"){
      navigate('/')
    }else{
      navigate(`/${item.toLowerCase()}`)
    }
  }


  return (
    <>
    {output.map((item , index)=>{
      return (
         <li onClick={()=>clickpath(item)} key={`_${index}`} className={`hover:font-semibold hover:text-[#053a3a] text-base list-none font-normal cursor-pointer ${clasname}`}>{item}</li>
      )
    })}
    </>
  )
}

export default MenuList
