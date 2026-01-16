import { createContext , useContext , useState } from "react";

const SeatContext = createContext();
const seats = [
  { id: "1A", status: "available" },
  { id: "1B", status: "selected" },
  { id: "1C", status: "premium" },
  { id: "1D", status: "booked" },
  { id: "2A", status: "available" },
  { id: "2B", status: "selected" },
  { id: "2C", status: "premium" },
  { id: "2D", status: "booked" },
  { id: "3A", status: "available" },
  { id: "3B", status: "selected" },
  { id: "3C", status: "premium" },
  { id: "3D", status: "booked" },
  { id: "4A", status: "available" },
  { id: "4B", status: "selected" },
  { id: "4C", status: "premium" },
  { id: "4D", status: "booked" },
  { id: "5A", status: "available" },
  { id: "5B", status: "selected" },
  { id: "5C", status: "premium" },
  { id: "5D", status: "booked" },
  { id: "6A", status: "available" },
  { id: "6B", status: "selected" },
  { id: "6C", status: "premium" },
  { id: "6D", status: "booked" },
  { id: "7A", status: "available" },
  { id: "7B", status: "selected" },
  { id: "7C", status: "premium" },
  { id: "7D", status: "booked" },
  { id: "8A", status: "available" },
  { id: "8B", status: "selected" },
  { id: "8C", status: "premium" },
  { id: "8D", status: "booked" },
  { id: "9A", status: "available" },
  { id: "9B", status: "selected" },
  { id: "9C", status: "premium" },
  { id: "9D", status: "booked" },
  { id: "10A", status: "available" },
  { id: "10B", status: "selected" },
  { id: "10C", status: "premium" },
  { id: "10D", status: "booked" },
];

export const SeatProvider=({children})=>{
   return(
      <SeatContext.Provider value={{seats}}>
         {children}
      </SeatContext.Provider>
   )
}

export const useSeat = () =>{
   return useContext(SeatContext)
}

