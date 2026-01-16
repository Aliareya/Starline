import React from 'react'
import BookingBanner from '../../components/banner/BookingBanner'
import SeatSelection from './parts/SeatSelection'

function Booking() {
  return (
    <div className='w-full  pt-20'>
      <BookingBanner/>
      <div className='w-full px-12 max-sm:px-2  py-4 bg-slate-100'>
         <SeatSelection/>
      </div>
    </div>
  )
}

export default Booking
