import React from 'react'
import Button from '../ui/botton/Button'

function Suggestion() {
  return (
     <div className="w-full h-auto md:py-14 py-10 md:px-20 max-md:px-9 sm:px-4 max-sm:px-2 btn-gradient">
        <h1 className="lg:text-4xl md:text-3xl text-xl text-white max-sm:font-bold font-semibold text-center font-[sans-serif]">
          Ready To Start Your Journey?
        </h1>
        <p className="text-base font-medium pt-5 text-center text-gray-200">
          Book Your Buss Ticket Today and Experience Comfortable affordable travel like<br className="md:flex hidden"></br> never before
        </p>
        <div className="w-full md:flex max-md:flex  justify-center items-center md:gap-5 max-md:gap-5 max-sm:gap-3 mt-7">
          <Button label={"Search Routes"} customClass={"bg-white darkgreen py-2 "}/>
          <Button label={"View Our Cars"} color={"g"} customClass={"border !border-white text-white py-2"}/>
        </div>
      </div>
  )
}

export default Suggestion
