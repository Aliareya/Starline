import React from 'react'
import { useSeat } from '../../../context/SeatContext'

function Seats({ label, color }) {
  return (
    <div className="flex gap-1 items-center">
      <div className={`w-6 h-6 rounded-md ${color}`} />
      <p className="text-xs font-medium">{label}</p>
    </div>
  )
}

function SeatBox({ seat, onSelect }) {
  const base =
    "flex justify-center items-center w-10 h-10 rounded-md text-xs font-medium border-2 transition"

  const styles = {
    available: "bg-gray-100 border-gray-300 cursor-pointer",
    selected: "bg-[#056666] border-gray-300 text-white cursor-pointer",
    booked: "bg-gray-300 border-gray-400 cursor-not-allowed",
    premium: "bg-[#f99e1f4d] border-[#f99e1f] cursor-pointer",
  }

  return (
    <div
      className={`${base} ${styles[seat.status]}`}
      onClick={() => seat.status !== "booked" && onSelect(seat.id)}
    >
      {seat.id}
    </div>
  )
}

function SeatSelection() {
  const { seats, toggleSeat } = useSeat()

  const selectedSeats = seats.filter(seat => seat.status === "selected")

  console.log("Selected seats:", selectedSeats)

  return (
    <div className="w-full flex flex-col items-center border mainbordercolor p-5 rounded-xl bg-white shadow-lg">

      <h1 className="text-lg font-bold">Select Your Seats</h1>

      {/* Legend */}
      <div className="w-full flex gap-7 max-sm:gap-3 max-sm:flex-wrap justify-center pt-5">
        <Seats label="Available" color="bg-gray-100 border-2 border-gray-300" />
        <Seats label="Selected" color="bg-[#056666] border-2 border-gray-300" />
        <Seats label="Booked" color="bg-gray-300 border-2 border-gray-400" />
        <Seats label="Premium" color="bg-[#f99e1f4d] border-2 border-[#f99e1f]" />
      </div>

      {/* Driver */}
      <div className="w-full flex flex-col items-center pt-5">
        <div className="w-24 h-12 flex justify-center items-center pt-2 bg-slate-300 rounded-t-full">
          <span className="text-sm text-gray-700 font-semibold">Driver</span>
        </div>

        {/* Seats Grid */}
        <div className="grid grid-cols-4 gap-y-3 gap-x-7 pt-5">
          {seats.map(seat => (
            <SeatBox
              key={seat.id}
              seat={seat}
              onSelect={toggleSeat}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 text-sm text-center">
        <p className="font-semibold mb-2">Selected Seats</p>

        {selectedSeats.length === 0 ? (
          <p className="text-gray-400">No seat selected</p>
        ) : (
          <div className="flex justify-center gap-2 flex-wrap">
            {selectedSeats.map(seat => (
              <span
                key={seat.id}
                className="px-3 py-1 bg-[#056666] text-white rounded-md text-xs"
              >
                {seat.id}
              </span>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default SeatSelection
