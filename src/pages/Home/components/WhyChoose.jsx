import React from 'react'
import { useSiteConstant } from '../../../context/SiteContext'
import SimpleCart from '../../../components/card/SimpleCart';

function WhyChoose() {
   const {WhyChooseus} = useSiteConstant();
  return (
    <div className="w-full h-auto lg:px-11 md:px-5 px-3  pt-10 pb-10">
        <h1 className="lg:text-4xl md:text-3xl text-2xl darkgreen font-semibold text-center font-[sans-serif]">Why Choose StarLine?</h1>
        <p className="text-base font-medium pt-3 text-center darkgreen">Experience the difference in every journey</p>
        <div className="w-full flex lg:flex-row flex-col gap-6 pt-10">
         {WhyChooseus.map((item , index)=>{
            return(
               <SimpleCart item={item} key={`__${index}`} is_about={true}/>
            )
         })}
        </div>
      </div>
  )
}

export default WhyChoose
