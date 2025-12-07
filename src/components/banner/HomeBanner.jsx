import React from "react";
import SplitText from "../ui/text/SplitText";
import CircularText from "../ui/text/CircularText";
import bg from "../../assets/images/car/c8.jpg";
import SearchBox from "../shared/SearchBox";

function HomeBanner() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div
      className="w-full h-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-fit gradient-light flex ">
        <div className="w-full flex flex-col item-start pt-20 px-10">
          <span className="text-6xl  font-[sans-serif] font-semibold  text-white orange">
            Comfort at every step.
          </span>
          <span className="text-4xl pt-4  font-[sans-serif] font-bold text-[#045353]">
            Arrive feeling renewed with
          </span>
          <span className="text-4xl pt-4  font-[sans-serif] font-bold orange">
            <SplitText
              text={"Star Line"}
              className="flex items-start justify-start italic"
            />
          </span>
          <span className="text-base  pt-4  font-[sans-serif] font-noraml text-gray-200">
            Affordable prices meet premium comfort. Our easy-to-use system helps
            <br></br>
            you discover the best deals on every route,making every trip
            budget-friendly<br></br>
            without losing quality or convenience. <br></br>
          </span>
          <div className="w-full flex justify-center mt-16 mb-10">
            <SearchBox  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
