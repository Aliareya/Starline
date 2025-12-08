import React from 'react'
import { Icon } from '@iconify/react'
import Button from "../ui/botton/Button"

function RouteCard({mystyle=null}) {
  return (
    <div className={`w-full group px-5 lg:py-5 md:py-6 py-5  rounded-lg flex flex-col justify-center items-center shadow-md border border-[#003b3b28] bg-[#ffffff6f] ${mystyle}`}>
      <div className='w-full flex items-center justify-between  xl:gap-10 gap-5'>
         <div className='flex gap-1'>
            <Icon icon="akar-icons:location" width="22" height="22"  style={{color: '#056666b2'}} />
            <h1 className='xl:text-base text-sm font-semibold darkgreen'>New York</h1>
         </div>
         <Icon icon="guidance:left-arrow" width="24" height="24"  style={{color: '#056666b2'}} />
         <div className='flex gap-1'>
            <Icon icon="akar-icons:location" width="22" height="22"  style={{color: '#056666b2'}} />
            <h1 className='xl:text-base text-sm font-semibold darkgreen'>New York</h1>
         </div>
      </div>
      <div className='w-full flex items-center justify-between gap-10 pt-3'>
         <div className='flex  items-center gap-2'>
            <Icon icon="mingcute:time-line" width="22" height="22"  style={{color: '#056666b2'}} />
            <h1 className='text-sm font-normal darkgreen'>4h 30m</h1>
         </div>
         <div className='flex gap-2 items-center'>
            <Icon icon="cuida:users-outline" width="22" height="22"  style={{color: '#056666b2'}} />
            <h1 className='text-sm font-normal darkgreen'>14 seats</h1>
         </div>
      </div>
      <div className='w-full flex items-center justify-between gap-10 pt-5'>
        <h1 className='text-xl font-semibold darkgreen'>$45</h1>
        <Button label={"Book Now"} color={"g"} customClass={"py-1.5"}/>
      </div>

    </div>
  )
}

export default RouteCard
