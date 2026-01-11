import { useContext, createContext, useState, Children } from "react";
import car1 from "../assets/images/car/c1.jpg"
import car2 from "../assets/images/car/c2.jpg"
import car3 from "../assets/images/car/c3.jpg"
import car4 from "../assets/images/car/c4.jpg"
import car5 from "../assets/images/car/c5.jpg" 
import car6 from "../assets/images/car/c6.jpg"
import car7 from "../assets/images/car/c7.jpg"
import car8 from "../assets/images/car/c8.jpg"
// import car9 from "../assets/images/car/c9"
// import car10 from "../assets/images/car/c10"

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const cars = [
    {
      id: 1,
      name: "Luxury Express",
      model: "Volvo 9700",
      seats: 45,
      carImg: car2,
      features: [
        "WiFi",
        "AC",
        "Entertainment",
        "Reclining Seats",
        "USB Charging",
        "Refreshments",
      ],
      driver: {
        name: "John Martinez",
        experience: "12 years",
        driverImg: "d1",
      },
      rating: 4.9,
    },
    {
      id: 2,
      name: "Elite Cruiser",
      model: "Mercedes-Benz Tourismo",
      seats: 50,
      carImg: car1,
      features: [
        "WiFi",
        "AC",
        "Entertainment",
        "Leather Seats",
        "USB Charging",
      ],
      driver: {
        name: "Michael Brown",
        experience: "15 years",
        driverImg: "d2",
      },
      rating: 4.8,
    },
    {
      id: 3,
      name: "Royal Ride",
      model: "Scania Irizar i6",
      seats: 48,
      carImg: car3,
      features: [
        "WiFi",
        "AC",
        "Entertainment",
        "Reclining Seats",
        "USB Charging",
      ],
      driver: {
        name: "David Wilson",
        experience: "10 years",
        driverImg: "d3",
      },
      rating: 4.7,
    },
    {
      id: 4,
      name: "Platinum Line",
      model: "Volvo 9800",
      seats: 46,
      carImg: car4,
      features: ["Free WiFi", "AC", "Entertainment", "Massage Seats"],
      driver: {
        name: "Carlos Ramirez",
        experience: "14 years",
        driverImg: "d4",
      },
      rating: 4.9,
    },
    {
      id: 5,
      name: "Sky Comfort",
      model: "Setra S 516 HD",
      seats: 44,
      carImg: car5,
      features: ["WiFi", "AC", "Entertainment", "Reading Lights"],
      driver: {
        name: "Alex Turner",
        experience: "9 years",
        driverImg: "d5",
      },
      rating: 4.6,
    },
    {
      id: 6,
      name: "Golden Route",
      model: "MAN Lion’s Coach",
      seats: 49,
      carImg: car6,
      features: ["WiFi", "AC", "Entertainment", "USB Charging"],
      driver: {
        name: "Robert King",
        experience: "11 years",
        driverImg: "d6",
      },
      rating: 4.8,
    },
    {
      id: 7,
      name: "Executive Way",
      model: "Neoplan Tourliner",
      seats: 47,
      carImg: car7,
      features: ["Free WiFi", "AC", "Entertainment", "Reclining Seats"],
      driver: {
        name: "Daniel Scott",
        experience: "13 years",
        driverImg: "d7",
      },
      rating: 4.9,
    },
    {
      id: 8,
      name: "Diamond Travel",
      model: "Irizar PB",
      seats: 46,
      carImg: car8,
      features: ["WiFi", "AC", "Entertainment", "Leather Seats"],
      driver: {
        name: "Luis Hernandez",
        experience: "16 years",
        driverImg: car8,
      },
      rating: 4.8,
    },
    {
      id: 9,
      name: "Premium Motion",
      model: "VDL Futura",
      seats: 45,
      carImg: car5,
      features: ["WiFi", "AC", "Entertainment", "USB Charging"],
      driver: {
        name: "James Cooper",
        experience: "8 years",
        driverImg: "d9",
      },
      rating: 4.5,
    },
    {
      id: 10,
      name: "Ultra Comfort",
      model: "Van Hool TX",
      seats: 48,
      carImg: car3,
      features: ["Free WiFi", "AC", "Entertainment", "Reclining Seats"],
      driver: {
        name: "Mark Johnson",
        experience: "17 years",
        driverImg: "d10",
      },
      rating: 5.0,
    },
  ];

  return <CarContext.Provider value={{cars}}>
        {children}
     </CarContext.Provider>;
};

export const useCar = () => {
  return useContext(CarContext);
};
