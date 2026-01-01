import React from 'react'
import { Icon } from '@iconify/react'
import img from "../../assets/images/img/img3.jpg"
import Input from '../../components/ui/input/Input'
import Button from '../../components/ui/botton/Button'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-auto md:px-0 px-1 flex lg:justify-start md:justify-center max-md:justify-center'>
     <div className='w-1/2 lg:block hidden h-auto bg-center bg-cover p-5'
      style={{backgroundImage:`url(${img})`}}></div>

      <div className='lg:w-1/2 md:w-4/5 max-md:w-11/12  xl:px-16 lg:px-10 pt-10'>
        <h1 className='text-3xl font-bold text-[#f99e1f] '>Sign In</h1>
        <p className='text-base font-normal text-gray-600 pt-2'>Enter your credentials to access your account</p>
        <div className='w-full '>
          <div className='pt-5'>
            <Input lable={'Email'} placeholder={"Email Address..."} icon={'line-md:email-twotone'} />
          </div>
          <div className='pt-5'>
            <Input lable={'Password'} placeholder={"Password..."} type='password' icon={'mdi:password-outline'} />
          </div>
          <div className='pt-5 flex items-center justify-between'>
            <div className='flex items-center p-0 -ml-3'>
               <input type="checkbox" className='w-10' name="" id="" />
               <span className='text-sm font-semibold'>Remember me</span>
            </div>
            <h2 className='text-sm font-semibold darkgreen cursor-pointer'>Forgot password?</h2>
          </div>
          <div className='pt-5'>
            <Button color={"g"} label={"Signin"} customClass={"w-full py-2.5 !text-base"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <div className='w-1/3 border border-gray-200'></div>
           <h1 className='text-base max-sm:text-[13px] font-normal text-gray-600'>Or continue with</h1>
           <div className='w-1/3 border border-gray-200'></div>
          </div>
          <div className='pt-5 flex justify-center  gap-10'>
            <Button icon={'material-icon-theme:google'} label={"Google"} customClass={"w-1/2 py-2 text-base border-2 mainbordercolor hover:gradientcart"}/>
            <Button icon={'fa7-brands:github'} label={"Github"} customClass={"w-1/2 py-2 text-base border-2 mainbordercolor hover:gradientcart"}/>
          </div>
          <div className='pt-6 flex justify-center gap-3 items-center'>
           <h1 className='text-base font-normal text-gray-600'>Don't have an account? 
            <span className='darkgreen pl-1 cursor-pointer'
            onClick={()=>navigate('/register')}><b>Sign up</b></span>
           </h1>
          </div>
        </div>
      </div >
      
    </div>
  )
}

export default Login
