import React from 'react'
import RouteCard from '../../../components/card/RouteCard'
import { useSiteConstant } from '../../../context/SiteContext';

function PupularRoutes() {
   const {WhyChooseus} = useSiteConstant();
  return (
    <div className="w-full h-auto lg:px-11 md:px-5 px-3  pt-4 pb-10">
        <h1 className="lg:text-4xl md:text-3xl text-3xl darkgreen max-sm:font-bold font-semibold text-center font-[sans-serif]">Popular Routes</h1>
        <p className="text-base font-medium pt-3 text-center darkgreen">Find the best deals on our most traveled routes</p>
        <div className="w-full flex justify-between lg:flex-row flex-col gap-6 pt-10">
         {WhyChooseus.map((item , index)=>{
            return(
               <RouteCard item={item} key={`__${index}`}/>
            )
         })}
        </div>
      </div>
  )
}

export default PupularRoutes
