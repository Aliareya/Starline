import { useState } from "react";
import { Icon } from "@iconify/react";
import RouteCard from "./parts/RouteCard"

const routesData = [
  {
    id: 1,
    from: "Herat",
    to: "Ghazni",
    duration: "4h 30m",
    distance: "215 miles",
    price: "$45",
    stops: "Hartford, Worcester",
    times: ["8:00 AM", "10:00 AM", "2:00 PM", "6:00 PM"],
    popular: true,
  },
  {
    id: 2,
    from: "Herat",
    to: "Mazar",
    duration: "6h 15m",
    distance: "382 miles",
    price: "$55",
    stops: "Bakersfield, Fresno",
    times: ["7:00 AM", "11:00 AM", "3:00 PM", "7:00 PM"],
    popular: true,
  },
  {
    id: 3,
    from: "Herat",
    to: "kabul",
    duration: "4h 45m",
    distance: "282 miles",
    price: "$38",
    stops: "Kalamazoo",
    times: ["8:00 AM", "12:00 PM", "4:00 PM"],
    popular: true,
  },
];

export default function AllRoutes() {
  return (
    <div className="w-full ">
      
      {/* HEADER */}
      <div className="bg-teal-800 text-white py-16 pt-32 px-3 text-center">
        <h1 className="text-3xl font-bold">Our Routes</h1>
        <p className="mt-3 text-sm opacity-90">
          Discover all the destinations we serve. Travel comfortably across the country.
        </p>

        <div className="mt-6 max-w-sm mx-auto relative">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search routes by city..."
            className="w-full pl-10 py-2 rounded-lg text-gray-800 outline-none"
          />
        </div>
      </div>


      {/* ROUTES GRID */}
      <div className="max-w-7xl mx-auto my-10 lg:px-10 md:px-5 max-md:px-5 max-sm:ox-3 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routesData.map(route => (
          <RouteCard key={route.id} route={route} />
        ))}
      </div>

    </div>
  );
}

