import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { useCar } from "../../context/CarContext";

export default function CarDetails() {
   const {id} = useParams()
   const {cars} = useCar()

   const car = cars?.find(item => item.name === id);

   return (
    <div className="max-w-7xl mx-auto lg:px-12 max-md:px-5 md:px-5 px-3 lg:p-6 md:p-3 max-sm:p-3 space-y-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT – IMAGES */}
        <div className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={car?.carImg}
              alt={car.name}
              className="w-full md:h-[320px] max-md:h-[320px] max-sm:h-[280px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Luxury Coach
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={`${car.carImg}`}
              className="rounded-xl object-cover h-32 w-full"
            />
            <div className="rounded-xl bg-gray-100 flex flex-col items-center justify-center text-gray-600">
              <Icon icon="mdi:image-multiple-outline" className="text-2xl mb-1" />
              <span className="text-sm">More Photos</span>
            </div>
          </div>
        </div>

        {/* RIGHT – INFO */}
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {car?.name}
            </h1>

            <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
              <span className="flex items-center gap-1 text-orange-400 font-semibold">
                <Icon icon="mdi:star" />
                {car.rating}
              </span>
              <span>(234 reviews)</span>
              <span>•</span>
              <span>Plate: NYC-1234</span>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our flagship luxury coach featuring premium reclining seats,
              onboard media, and complimentary snacks. Perfect for long-distance
              travel in ultimate comfort.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-xl p-4 flex items-center gap-3">
              <Icon icon="mdi:account-group-outline" className="text-2xl text-teal-700" />
              <div>
                <p className="text-sm text-gray-500">Capacity</p>
                <p className="font-semibold">45 Seats</p>
              </div>
            </div>

            <div className="border rounded-xl p-4 flex items-center gap-3">
              <Icon icon="mdi:cash" className="text-2xl text-teal-700" />
              <div>
                <p className="text-sm text-gray-500">Price Range</p>
                <p className="font-semibold">$35 - $75</p>
              </div>
            </div>
          </div>

          {/* FACILITIES */}
          <div>
            <h3 className="font-semibold mb-3">Facilities & Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "mdi:wifi", label: "WiFi" },
                { icon: "mdi:snowflake", label: "AC" },
                { icon: "mdi:usb", label: "USB Charging" },
                { icon: "mdi:television", label: "Media" },
                { icon: "mdi:food-outline", label: "Snacks" }
              ].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium"
                >
                  <Icon icon={item.icon} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* ROUTES */}
          <div>
            <h3 className="font-semibold mb-3">Popular Routes</h3>
            <div className="flex flex-wrap gap-2">
              {["New York – Boston", "New York – Washington DC", "New York – Philadelphia"].map(
                (route, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border rounded-full text-sm text-gray-700"
                  >
                    {route}
                  </span>
                )
              )}
            </div>
          </div>

          {/* BOOK BUTTON
          <button className="w-full mt-4 bg-teal-700 hover:bg-teal-800 transition text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Icon icon="mdi:calendar-check-outline" />
            Book This Bus
          </button> */}

        </div>
      </div>

      {/* DRIVER CARD */}
      <div className="border rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-lg">
            MJ
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Michael Johnson</h3>
            <p className="text-sm text-gray-500">12 years Experience</p>
            <p className="flex items-center gap-1 text-sm text-orange-400 font-semibold">
              <Icon icon="mdi:star" />
              4.9 <span className="text-gray-500 font-normal">• 2,456 trips</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-gray-700 text-sm">
          <span className="flex items-center gap-2">
            <Icon icon="mdi:phone-outline" />
            +1 (555) 123-4567
          </span>
          <span className="flex items-center gap-2">
            <Icon icon="mdi:email-outline" />
            m.johnson@travelease.com
          </span>
        </div>

      </div>

    </div>
  );
}
