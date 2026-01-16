import { createContext, useContext, useState } from "react";

const SeatContext = createContext();

const initialSeats = [
  { id: "1A", status: "premium" },
  { id: "1B", status: "premium" },
  { id: "1C", status: "premium" },
  { id: "1D", status: "premium" },

  { id: "2A", status: "premium" },
  { id: "2B", status: "premium" },
  { id: "2C", status: "premium" },
  { id: "2D", status: "premium" },

  { id: "3A", status: "available" },
  { id: "3B", status: "available" },
  { id: "3C", status: "available" },
  { id: "3D", status: "booked" },

  { id: "4A", status: "available" },
  { id: "4B", status: "available" },
  { id: "4C", status: "available" },
  { id: "4D", status: "booked" },

  { id: "5A", status: "available" },
  { id: "5B", status: "available" },
  { id: "5C", status: "available" },
  { id: "5D", status: "booked" },

  { id: "6A", status: "available" },
  { id: "6B", status: "available" },
  { id: "6C", status: "available" },
  { id: "6D", status: "booked" },

  { id: "7A", status: "available" },
  { id: "7B", status: "available" },
  { id: "7C", status: "available" },
  { id: "7D", status: "available" },

  { id: "8A", status: "available" },
  { id: "8B", status: "available" },
  { id: "8C", status: "available" },
  { id: "8D", status: "available" },

  { id: "9A", status: "available" },
  { id: "9B", status: "available" },
  { id: "9C", status: "available" },
  { id: "9D", status: "available" },

  { id: "10A", status: "available" },
  { id: "10B", status: "available" },
  { id: "10C", status: "available" },
  { id: "10D", status: "available" },
];

export const SeatProvider = ({ children }) => {
  const [seats, setSeats] = useState(initialSeats);

  const toggleSeat = (id) => {
    setSeats(prev =>
      prev.map(seat => {
        if (seat.id !== id) return seat;
        if (seat.status === "booked") return seat;

        return {
          ...seat,
          status: seat.status === "selected" ? "available" : "selected",
        };
      })
    );
  };

  return (
    <SeatContext.Provider value={{ seats, toggleSeat }}>
      {children}
    </SeatContext.Provider>
  );
};

export const useSeat = () => useContext(SeatContext);
