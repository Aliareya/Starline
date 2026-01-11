import React from 'react'
import { useCar } from '../../context/CarContext'
import CarCard from './parts/CarCard'

function Cars() {
   const {cars} = useCar() 
  return (
    <div className='lg:px-12 md:px-6 px-2 flex flex-col gap-5'>
      {cars.map((car , index)=>{
         return(
            <CarCard key={index} car={car}/>
         )
      })}
    </div>
  )
}

export default Cars
