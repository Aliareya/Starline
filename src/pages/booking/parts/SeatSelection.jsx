import React from 'react'
import { useSeat } from '../../../context/SeatContext'

function Seats({lable=null , color = null}){
  return(
    <div className='flex gap-1 items-center'>
      <div className={`w-6 h-6 rounded-md ${color}`}></div>
      <p className='text-xs font-medium'>{lable}</p>
    </div>
  )
}


function SeatSelection() {
  const {seats} = useSeat()
  console.log(seats)
  return (
    <div className='w-full flex flex-col items-center border mainbordercolor p-5 rounded-xl bg-white shadow-lg h-auto'>
      <h1 className='text-lg font-bold'>Select Your Seats</h1>
      <div className='w-full flex gap-7 items-center justify-center pt-5'>
        <Seats lable="Available" color="bg-gray-100 border-2 border-gray-300"/> 
        <Seats lable="Selected" color="bg-[#056666] border-2 border-gray-300"/> 
        <Seats lable="Booked" color="bg-gray-300 border-2 border-gray-400"/> 
        <Seats lable="Premium" color="bg-[#f99e1f4d] border-2 border-[#f99e1f]"/> 
      </div>
      <div className='w-full flex flex-col justify-center items-center pt-5'>
        <div className='w-24 h-12 flex justify-center items-center pt-2 bg-slate-300 rounded-t-full'>
          <span className='text-sm text-gray-700 font-semibold'>Driver</span>
        </div>
        <div className="grid grid-cols-4 gap-y-3 gap-x-7  pt-5">
          {seats?.map((seat , index)=>{
            return(
              <div key={index} className={`cursor-pointer flex justify-center items-center w-10 h-10 rounded-md bg-gray-100 border-2 border-gray-300`}>
                <p className='text-xs font-semibold'>{seat.id}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default SeatSelection
