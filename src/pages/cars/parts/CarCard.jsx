import { Icon } from "@iconify/react";

export default function CarCard({ car }) {
  return (
    <div className="w-full border mainbordercolor bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Image */}
      <div className="bg-cover bg-center lg:w-auto lg:h-auto md:w-full max-md:w-full max-md:h-72 md:h-72 max-sm:h-52 max-sm:w-full " style={{
         backgroundImage:`url(${car.carImg})`
      }}>
       

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
          <Icon icon="mdi:star" />
          {car.rating}
        </div>
      </div>

      {/* Right Content */}
      <div className="md:p-6 max-md:p-6 max-sm:p-3 flex flex-col justify-between">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {car.name}
            </h2>

            <span className="flex items-center gap-2 border px-3 py-1 rounded-full text-sm text-gray-700">
              <Icon icon="mdi:account-group-outline" />
              {car.seats} Seats
            </span>
          </div>

          <p className="text-gray-500 mt-1">{car.model}</p>
        </div>

        {/* Features */}
        <div className="mt-5">
          <h3 className="font-semibold text-gray-900 mb-3">
            Features & Amenities
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {car.features.slice(0, 5).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Icon Features */}
          <div className="flex gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:wifi" className="text-xl max-sm:text-sm text-teal-700" />
              WiFi
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:television" className="text-xl max-sm:text-sm text-teal-700" />
              Media
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:coffee-outline" className="max-sm:text-sm text-xl text-teal-700" />
              Snacks
            </div>
          </div>
        </div>

        {/* Driver */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon
              icon="mdi:shield-check-outline"
              className="text-2xl text-teal-700"
            />
            <div>
              <p className="font-semibold text-gray-900">Assigned Driver</p>
              <p className="text-gray-700">{car.driver.name}</p>
              <p className="text-sm text-gray-500">
                {car.driver.experience} experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-orange-400 font-semibold">
            <Icon icon="mdi:star" />
            {car.rating}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-teal-700 text-white py-3 rounded-xl font-semibold hover:bg-teal-800 transition">
            View Details
          </button>
          <button className="flex-1 bg-orange-400 text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition">
            Book This Bus
          </button>
        </div>

      </div>
    </div>
  );
}
