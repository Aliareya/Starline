import React from 'react';
import logo from "../../assets/icon/logo.svg";
import MenuList from './MenuList';
import Button from '../ui/botton/Button';

function Header() {
  return (
    <div className='w-full h-20 flex justify-between items-center'>

      <div className='w-1/4 h-20'>
        <img src={logo} className='w-36 h-20 cursor-pointer' alt="" />
      </div>

      <div className='w-1/2 h-20 flex justify-end gap-10 items-center'>
       <MenuList/>
      </div>

      <div className='w-1/4 h-20 flex justify-end items-center'>
        <Button label={"Login"} color={"b"}/>
        <Button color={"o"} label={"Sing Up"}  />
      </div>

    </div>
  )
}

export default Header
