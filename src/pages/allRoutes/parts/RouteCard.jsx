import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RouteCard({ route }) {
  const navigate = useNavigate()
  const [selectedTime, setSelectedTime] = useState(null);
  const handleSelect = (time) =>{
   if(selectedTime === time){
      setSelectedTime(null)
   }else{
      setSelectedTime(time)
   }
  }

  return (
    <div className="border rounded-xl  bg-white shadow-sm flex flex-col justify-between">
      
      {/* TITLE */}
      <div>
        <div className="flex justify-between items-center bg-[#e7f0f0] px-4 py-4 rounded-t-md">
          <h3 className="font-semibold text-gray-900">
            {route.from} → {route.to}
          </h3>
          {route.popular && (
            <span className="text-xs bg-teal-700 text-white px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* INFO */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3 px-4">
          <span className="flex items-center gap-1">
            <Icon icon="mdi:clock-outline" /> {route.duration}
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="mdi:map-marker-distance" /> {route.distance}
          </span>
          <span className="flex items-center gap-1 text-teal-700 font-semibold">
            From {route.price}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-2 px-4">
          Stops: {route.stops}
        </p>
      </div>

      {/* TIMES */}
      <div className="mt-4 px-4">
        <p className="text-sm font-medium mb-2">Departures:</p>
        <div className="flex flex-wrap gap-2">
          {route.times.map(time => (
            <button
              key={time}
              onClick={() => handleSelect(time)}
              className={`px-3 py-1 text-xs rounded-full border transition
                ${
                  selectedTime === time
                    ? "bg-teal-700 text-white border-teal-700"
                    : "text-gray-700 hover:border-teal-700"
                }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={()=>navigate('/booking')}
        disabled={!selectedTime}
        className={`mt-5 py-2 rounded-lg text-sm font-semibold transition my-4 mx-5
          ${
            selectedTime
              ? "bg-teal-700 text-white hover:bg-teal-800"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
      >
        Book This Route
      </button>
    </div>
  );
}
