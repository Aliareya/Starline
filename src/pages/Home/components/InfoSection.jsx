import React from 'react';
import img from "../../../assets/images/img/img1.jpg"
import { useSiteConstant } from '../../../context/SiteContext';
import Button from '../../../components/ui/botton/Button';

function InfoSection() {
   const {siteBio} =useSiteConstant()
  return (
    <div className='w-full h-auto flex lg:flex-row md:flex-col max-md:flex-col max-sm:flex-col gap-5 lg:px-11 md:px-5 max-md:px-5 max-sm:px-3 lg:py-5 py-1 lg:my-5  mb-5 '>
      <div className='lg:w-1/2 md:w-full max-md:w-full max-sm:w-full  lg:h-[420px] md:h-96 max-md:h-96 max-sm:h-64 bg-center bg-cover rounded-lg'
         style={{backgroundImage : `url(${img})`}}>
      </div>
      <div className='lg:w-1/2 md:w-full max-md:w-full max-sm:w-fullh-auto'>
         <h1 className="lg:text-3xl md:text-3xl text-xl text-[#f99e1f] pt-4 max-sm:font-bold font-semibold ">
            Your Comfort Is Our Priority
         </h1>
         <p className='text-lg max-sm:text-base pl-1 pt-6'>{siteBio}</p>
         <div className='w-full flex items-center gap-2 mt-4 pl-1'>
            <div className='w-6 h-6 rounded-full gradientcart flex justify-center items-center'>
              <div className='w-2 h-2 rounded-full bg-[#ffffff]'></div>
            </div>
            <p className='text-base max-sm:text-base'>GPS-tracked buses for real-time monitoring</p>
         </div>
         <div className='w-full flex items-center gap-2 mt-5 pl-1'>
            <div className='w-6 h-6 rounded-full gradientcart flex justify-center items-center'>
              <div className='w-2 h-2 rounded-full bg-[#ffffff]'></div>
            </div>
            <p className='text-base max-sm:text-base'>Experienced and verified drivers</p>
         </div>
         <div className='w-full flex items-center gap-2 mt-5 mb-8 pl-1'>
            <div className='w-6 h-6 rounded-full gradientcart flex justify-center items-center'>
              <div className='w-2 h-2 rounded-full bg-[#ffffff]'></div>
            </div>
            <p className='text-base max-sm:text-base'>24/7 customer support</p>
         </div>
         <Button label={"Learn More About Us"} color={"g"} customClass={"py-2.5 ml-1 hover:py-3 hover:!px-5 "}/>
      </div>
      
    </div>
  )
}

export default InfoSection
